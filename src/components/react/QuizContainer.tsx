import React, { useState, useEffect, useMemo } from 'react';
import type { Pregunta } from '../../data/types';

interface QuizContainerProps {
  preguntas: Pregunta[];
  unidadTitulo: string;
  unidadColor: string;
}

interface EstadoPregunta {
  respondida: boolean;
  respuestaSeleccionada: number | null;
  esCorrecta: boolean | null;
}

export default function QuizContainer({ preguntas, unidadTitulo, unidadColor }: QuizContainerProps) {
  const shuffleInPlace = <T,>(arr: T[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Aleatorizar preguntas y opciones al cambiar la unidad
  const preguntasAleatorias = useMemo(() => {
    const preguntasMezcladas = shuffleInPlace([...preguntas]);
    return preguntasMezcladas.map(pregunta => {
      const indices = shuffleInPlace(pregunta.opciones.map((_, i) => i));
      const opciones = indices.map(i => pregunta.opciones[i]);
      const correcta = indices.indexOf(pregunta.correcta);
      return { ...pregunta, opciones, correcta };
    });
  }, [preguntas]);

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [estadoPreguntas, setEstadoPreguntas] = useState<EstadoPregunta[]>(
    preguntasAleatorias.map(() => ({
      respondida: false,
      respuestaSeleccionada: null,
      esCorrecta: null,
    }))
  );
  const [mostrarResultados, setMostrarResultados] = useState(false);

  useEffect(() => {
    setEstadoPreguntas(
      preguntasAleatorias.map(() => ({
        respondida: false,
        respuestaSeleccionada: null,
        esCorrecta: null,
      }))
    );
    setPreguntaActual(0);
    setMostrarResultados(false);
  }, [preguntasAleatorias]);

  const pregunta = preguntasAleatorias[preguntaActual];
  const estado = estadoPreguntas[preguntaActual];

  const totalCorrectas = estadoPreguntas.filter(e => e.esCorrecta === true).length;
  const totalRespondidas = estadoPreguntas.filter(e => e.respondida).length;
  const porcentajeCompletado = (totalRespondidas / preguntasAleatorias.length) * 100;
  const porcentajeAciertos = totalRespondidas > 0 ? (totalCorrectas / totalRespondidas) * 100 : 0;

  const handleSeleccionarRespuesta = (indice: number) => {
    if (estado.respondida) return;

    const esCorrecta = indice === pregunta.correcta;
    
    setEstadoPreguntas(prev => {
      const nuevo = [...prev];
      nuevo[preguntaActual] = {
        respondida: true,
        respuestaSeleccionada: indice,
        esCorrecta,
      };
      return nuevo;
    });
  };

  const handleSiguiente = () => {
    if (preguntaActual < preguntasAleatorias.length - 1) {
      setPreguntaActual(prev => prev + 1);
    } else {
      setMostrarResultados(true);
    }
  };

  const handleAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(prev => prev - 1);
    }
  };

  const handleIrAPregunta = (indice: number) => {
    setPreguntaActual(indice);
    setMostrarResultados(false);
  };

  const handleReiniciar = () => {
    setEstadoPreguntas(
      preguntasAleatorias.map(() => ({
        respondida: false,
        respuestaSeleccionada: null,
        esCorrecta: null,
      }))
    );
    setPreguntaActual(0);
    setMostrarResultados(false);
  };

  if (mostrarResultados) {
    return (
      <ResultadosFinales
        totalPreguntas={preguntasAleatorias.length}
        totalCorrectas={totalCorrectas}
        estadoPreguntas={estadoPreguntas}
        preguntas={preguntasAleatorias}
        unidadTitulo={unidadTitulo}
        unidadColor={unidadColor}
        onReiniciar={handleReiniciar}
        onIrAPregunta={handleIrAPregunta}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header del Quiz */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-2xl font-bold bg-gradient-to-r ${unidadColor} bg-clip-text text-transparent`}>
            {unidadTitulo}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">
              {totalCorrectas}/{totalRespondidas} correctas
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              porcentajeAciertos >= 70 ? 'bg-green-500/20 text-green-400' :
              porcentajeAciertos >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {porcentajeAciertos.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="relative">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${unidadColor} transition-all duration-500 ease-out`}
              style={{ width: `${porcentajeCompletado}%` }}
            />
          </div>
          <p className="text-right text-sm text-slate-400 mt-1">
            Pregunta {preguntaActual + 1} de {preguntasAleatorias.length}
          </p>
        </div>
      </div>

      {/* Navegación de preguntas */}
      <div className="mb-6 flex flex-wrap gap-2">
        {estadoPreguntas.map((est, idx) => (
          <button
            key={idx}
            onClick={() => handleIrAPregunta(idx)}
            className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
              idx === preguntaActual
                ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900'
                : ''
            } ${
              est.respondida
                ? est.esCorrecta
                  ? 'bg-green-500/30 text-green-400 hover:bg-green-500/40'
                  : 'bg-red-500/30 text-red-400 hover:bg-red-500/40'
                : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Tarjeta de pregunta */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 animate-fade-in">
        <div className="flex items-start gap-3 mb-6">
          <span className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r ${unidadColor} flex items-center justify-center text-lg font-bold`}>
            {preguntaActual + 1}
          </span>
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">{pregunta.categoria}</span>
            <h3 className="text-xl font-semibold mt-1">{pregunta.pregunta}</h3>
          </div>
        </div>

        {/* Opciones */}
        <div className="space-y-3">
          {pregunta.opciones.map((opcion, idx) => {
            const esSeleccionada = estado.respuestaSeleccionada === idx;
            const esRespuestaCorrecta = idx === pregunta.correcta;
            const mostrarResultado = estado.respondida;

            let claseBoton = 'bg-slate-700/50 hover:bg-slate-700 border-slate-600 hover:border-slate-500';
            
            if (mostrarResultado) {
              if (esRespuestaCorrecta) {
                claseBoton = 'bg-green-500/20 border-green-500 text-green-300';
              } else if (esSeleccionada && !esRespuestaCorrecta) {
                claseBoton = 'bg-red-500/20 border-red-500 text-red-300';
              } else {
                claseBoton = 'bg-slate-700/30 border-slate-700 text-slate-500 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSeleccionarRespuesta(idx)}
                disabled={estado.respondida}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${claseBoton} ${
                  !estado.respondida ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    mostrarResultado && esRespuestaCorrecta ? 'bg-green-500' :
                    mostrarResultado && esSeleccionada ? 'bg-red-500' :
                    'bg-slate-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opcion}</span>
                  {mostrarResultado && esRespuestaCorrecta && (
                    <span className="text-green-400">✓</span>
                  )}
                  {mostrarResultado && esSeleccionada && !esRespuestaCorrecta && (
                    <span className="text-red-400">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explicación */}
        {estado.respondida && (
          <div className={`mt-6 p-4 rounded-xl ${
            estado.esCorrecta ? 'bg-green-500/10 border border-green-500/30' : 'bg-blue-500/10 border border-blue-500/30'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{estado.esCorrecta ? '🎉' : '💡'}</span>
              <div>
                <p className={`font-semibold mb-1 ${estado.esCorrecta ? 'text-green-400' : 'text-blue-400'}`}>
                  {estado.esCorrecta ? '¡Correcto!' : 'Explicación'}
                </p>
                <p className="text-slate-300 text-sm">{pregunta.explicacion}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleAnterior}
          disabled={preguntaActual === 0}
          className="px-6 py-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-2"
        >
          ← Anterior
        </button>
        
        <button
          onClick={handleSiguiente}
          disabled={!estado.respondida}
          className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
            estado.respondida
              ? `bg-gradient-to-r ${unidadColor} hover:opacity-90`
              : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
          }`}
        >
          {preguntaActual === preguntasAleatorias.length - 1 ? 'Ver Resultados' : 'Siguiente'} →
        </button>
      </div>
    </div>
  );
}

// Componente de Resultados Finales
interface ResultadosFinalesProps {
  totalPreguntas: number;
  totalCorrectas: number;
  estadoPreguntas: EstadoPregunta[];
  preguntas: Pregunta[];
  unidadTitulo: string;
  unidadColor: string;
  onReiniciar: () => void;
  onIrAPregunta: (indice: number) => void;
}

function ResultadosFinales({
  totalPreguntas,
  totalCorrectas,
  estadoPreguntas,
  preguntas,
  unidadTitulo,
  unidadColor,
  onReiniciar,
  onIrAPregunta,
}: ResultadosFinalesProps) {
  const porcentaje = (totalCorrectas / totalPreguntas) * 100;
  
  // Agrupar por categoría
  const resultadosPorCategoria = preguntas.reduce((acc, pregunta, idx) => {
    const categoria = pregunta.categoria;
    if (!acc[categoria]) {
      acc[categoria] = { total: 0, correctas: 0 };
    }
    acc[categoria].total++;
    if (estadoPreguntas[idx].esCorrecta) {
      acc[categoria].correctas++;
    }
    return acc;
  }, {} as Record<string, { total: number; correctas: number }>);

  let mensaje = '';
  let emoji = '';
  if (porcentaje >= 90) {
    mensaje = '¡Excelente! Dominas este tema.';
    emoji = '🏆';
  } else if (porcentaje >= 70) {
    mensaje = '¡Muy bien! Buen conocimiento del tema.';
    emoji = '🎉';
  } else if (porcentaje >= 50) {
    mensaje = 'Bien, pero puedes mejorar.';
    emoji = '💪';
  } else {
    mensaje = 'Necesitas repasar este tema.';
    emoji = '📚';
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Tarjeta principal de resultados */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center mb-8">
        <span className="text-6xl mb-4 block">{emoji}</span>
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${unidadColor} bg-clip-text text-transparent mb-2`}>
          {unidadTitulo}
        </h2>
        <p className="text-slate-400 mb-6">{mensaje}</p>

        {/* Círculo de puntuación */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-slate-700"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - porcentaje / 100)}`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={porcentaje >= 70 ? '#22c55e' : porcentaje >= 50 ? '#eab308' : '#ef4444'} />
                <stop offset="100%" stopColor={porcentaje >= 70 ? '#16a34a' : porcentaje >= 50 ? '#ca8a04' : '#dc2626'} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{porcentaje.toFixed(0)}%</span>
            <span className="text-slate-400 text-sm">{totalCorrectas}/{totalPreguntas}</span>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
            <p className="text-2xl font-bold text-green-400">{totalCorrectas}</p>
            <p className="text-sm text-slate-400">Correctas</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
            <p className="text-2xl font-bold text-red-400">{totalPreguntas - totalCorrectas}</p>
            <p className="text-sm text-slate-400">Incorrectas</p>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
            <p className="text-2xl font-bold text-blue-400">{totalPreguntas}</p>
            <p className="text-sm text-slate-400">Total</p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onReiniciar}
            className={`px-8 py-3 rounded-xl font-semibold bg-gradient-to-r ${unidadColor} hover:opacity-90 transition-all`}
          >
            🔄 Reintentar Test
          </button>
          <a
            href="/"
            className="px-8 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-600 transition-all"
          >
            🏠 Volver al Inicio
          </a>
        </div>
      </div>

      {/* Resultados por categoría */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 mb-8">
        <h3 className="text-xl font-semibold mb-4">📊 Resultados por Categoría</h3>
        <div className="space-y-3">
          {Object.entries(resultadosPorCategoria).map(([categoria, datos]) => {
            const porcCategoria = (datos.correctas / datos.total) * 100;
            return (
              <div key={categoria} className="flex items-center gap-4">
                <span className="w-32 text-sm text-slate-400 truncate">{categoria}</span>
                <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      porcCategoria >= 70 ? 'bg-green-500' :
                      porcCategoria >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${porcCategoria}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-20 text-right">
                  {datos.correctas}/{datos.total} ({porcCategoria.toFixed(0)}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Revisión de preguntas falladas */}
      {totalPreguntas - totalCorrectas > 0 && (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <h3 className="text-xl font-semibold mb-4">❌ Preguntas Incorrectas - Revisar</h3>
          <div className="space-y-3">
            {preguntas.map((pregunta, idx) => {
              if (estadoPreguntas[idx].esCorrecta) return null;
              return (
                <button
                  key={idx}
                  onClick={() => onIrAPregunta(idx)}
                  className="w-full text-left p-4 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/30 flex items-center justify-center text-sm font-bold text-red-400">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-300 truncate">{pregunta.pregunta}</p>
                      <p className="text-xs text-slate-500 mt-1">{pregunta.categoria}</p>
                    </div>
                    <span className="text-slate-400">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
