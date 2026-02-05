# 🎓 Quiz 2º DAM

Test interactivo para todas las asignaturas de **2º Desarrollo de Aplicaciones Multiplataforma** con preguntas organizadas por asignatura y tema.

## 📚 Asignaturas

Este proyecto está organizado para incluir contenido de las 9 asignaturas de 2º DAM:

### Con contenido disponible:
- **📱 Desarrollo de Interfaces** (6 temas, 165+ preguntas)
  - Dart, Flutter, Widgets, Arquitectura, Navegación, APIs y Firebase
- **💾 Acceso a Datos** (2 temas, 120+ preguntas)
  - Hibernate/JPA, ORM

### Pendientes de añadir:
- **⚙️ Programación de Servicios y Procesos** (PSP)
- **🏢 Sistema de Gestión Empresarial** (SGE)
- **🌐 Inglés Adaptado a DAM**
- **💼 Itinerario Personal para la Empleabilidad II**
- **🤖 Introducción a la Programación de IA**
- **🎬 Programación Multimedia**
- **📊 Proyectos**

### Sección especial:
- **📝 Exámenes** - Preguntas de exámenes anteriores (transversal)

## 🏗️ Estructura del Proyecto

```
src/
├── data/
│   ├── types.ts                    # Interfaces TypeScript
│   ├── asignaturas.ts              # Configuración de asignaturas
│   ├── index.ts                    # Registry central
│   ├── desarrollo-interfaces/      # Preguntas de DI
│   │   ├── unidad3.ts
│   │   ├── unidad4.ts
│   │   └── ...
│   ├── acceso-datos/              # Preguntas de AD
│   │   ├── psp.ts
│   │   └── hibernate.ts
│   ├── examenes/                  # Exámenes
│   │   └── examen_anterior.ts
│   └── [otras-asignaturas]/       # Pendientes de contenido
├── pages/
│   ├── index.astro                # Homepage con grid de asignaturas
│   └── quiz/
│       ├── [asignatura]/
│       │   ├── index.astro        # Página intermedia con temas
│       │   └── [tema].astro       # Quiz específico
│       └── examenes/
│           └── [examen].astro     # Exámenes transversales
└── components/
    ├── AsignaturaCard.astro       # Tarjeta de asignatura
    ├── TemaCard.astro             # Tarjeta de tema
    └── react/
        └── QuizContainer.tsx      # Componente interactivo del quiz
```

## ✨ Características

- 🎲 **Preguntas aleatorias** - Orden diferente en cada intento
- 💡 **Explicaciones detalladas** - Aprende de cada respuesta
- 📊 **Estadísticas por tema** - Conoce tu progreso por categoría
- 🔄 **Reintentos ilimitados** - Practica sin restricciones
- 🎨 **Diseño moderno** - Interfaz responsive con Tailwind CSS
- ⚡ **Feedback inmediato** - Sabe al instante si acertaste
- 🗂️ **Organización jerárquica** - Navegación clara por asignatura → tema
- 📱 **URLs limpias** - Rutas descriptivas (`/quiz/acceso-datos/hibernate`)

## 🚀 Tecnologías

- [Astro 5.1](https://astro.build) - Framework web estático
- [React 19](https://react.dev) - Componentes interactivos
- [Tailwind CSS 3.4](https://tailwindcss.com) - Estilos utility-first
- [TypeScript 5.7](https://www.typescriptlang.org) - Tipado estático

## 🛠️ Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone [tu-repo-url]
cd quiz-flutter

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview del build
npm run preview
```

## ➕ Cómo Añadir Contenido

### 1. Añadir preguntas a una asignatura existente:

Edita el archivo correspondiente en `src/data/[asignatura]/`:

```typescript
// src/data/desarrollo-interfaces/unidad9.ts
import type { Pregunta } from '../types';

export const preguntasUnidad9: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Cuál es...?",
    opciones: ["A", "B", "C", "D"],
    correcta: 2,  // Índice 0-based
    explicacion: "Explicación detallada...",
    categoria: "Categoría del tema"
  },
  // ... más preguntas
];
```

### 2. Registrar el nuevo tema:

Añádelo en `src/data/index.ts`:

```typescript
// Import
import { preguntasUnidad9 } from './desarrollo-interfaces/unidad9';

// Añadir a temasDesarrolloInterfaces
{
  id: 'unidad9',
  titulo: 'Nuevo Tema',
  descripcion: '...',
  temas: ['Contenido 1', 'Contenido 2'],
  color: 'from-red-500 to-orange-600',
  icono: '🚀',
  asignaturaId: 'desarrollo-interfaces'
}

// Añadir a preguntasPorTema
'desarrollo-interfaces': {
  // ...
  'unidad9': preguntasUnidad9
}
```

### 3. Añadir contenido a una asignatura vacía:

1. Crea archivos `.ts` en `src/data/[asignatura]/`
2. Registra los temas en `temasPorAsignatura`
3. Añade las preguntas a `preguntasPorTema`
4. Las rutas se generarán automáticamente

## 📦 Despliegue

Configurado para Vercel (ver `vercel.json`):

```bash
npx vercel
```

También compatible con Netlify, Cloudflare Pages, etc.

## 📄 Licencia

MIT

---

**Desarrollado para 2º DAM** 🎓
