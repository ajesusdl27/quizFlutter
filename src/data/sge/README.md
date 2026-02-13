# SGE - Sistema de Gestión Empresarial

## 📚 Descripción

Banco de preguntas completo para la asignatura de **Sistema de Gestión Empresarial**, enfocado en el desarrollo full-stack de un e-commerce moderno utilizando tecnologías actuales.

El contenido abarca desde la arquitectura frontend con Astro hasta la infraestructura de despliegue con Docker y Coolify, pasando por base de datos con Supabase y pagos con Stripe.

---

## 🎯 Temas Disponibles

### 1️⃣ **Fundamentos de Astro** (20 preguntas)
- **Archivo**: `astro-fundamentos.ts`
- **Color**: `from-purple-500 to-blue-600`
- **Icono**: 🚀
- **Contenido**:
  - Arquitectura del proyecto FashionStore
  - Sistema de renderizado (SSG/SSR/Hybrid)
  - Componentes e Islas (Islands Architecture)
  - Configuración y file-based routing
  - Integración con frameworks UI (React, Preact)

### 2️⃣ **Supabase y Base de Datos** (25 preguntas)
- **Archivo**: `supabase.ts`
- **Color**: `from-green-500 to-emerald-600`
- **Icono**: 🗄️
- **Contenido**:
  - Arquitectura de Supabase como BaaS
  - PostgreSQL y tipos de datos
  - Row Level Security (RLS) y políticas
  - Authentication y gestión de usuarios
  - Storage y manejo de archivos
  - Realtime y consultas con el cliente JS

### 3️⃣ **Pagos con Stripe** (15 preguntas)
- **Archivo**: `stripe.ts`
- **Color**: `from-violet-500 to-purple-600`
- **Icono**: 💳
- **Contenido**:
  - PaymentIntent y flujo de pago
  - Seguridad y PCI Compliance
  - Webhooks y confirmaciones
  - Integración con Stripe.js y Elements
  - Gestión de clientes y metadata
  - Integración con CDN (Cloudinary)

### 4️⃣ **Infraestructura y Despliegue** (40 preguntas)
- **Archivo**: `coolify.ts`
- **Color**: `from-orange-500 to-red-600`
- **Icono**: 🐳
- **Contenido**:
  - Coolify como self-hosted PaaS
  - Docker y contenedores
  - VPS y gestión de servidores
  - CI/CD con GitHub
  - Nixpacks y build automation
  - SSL, dominios y configuración de producción
  - Nano Stores y gestión de estado
  - Seguridad y optimización

---

## 📊 Estadísticas

- **Total de preguntas**: 100
- **Total de temas**: 4
- **Categorías por tema**:
  - **Astro**: Arquitectura, Renderizado, Componentes, Configuración, Diseño
  - **Supabase**: Arquitectura, RLS, Datos, Storage, Auth
  - **Stripe**: PaymentIntent, Seguridad, Webhooks, Integración
  - **Coolify**: Coolify, Docker, VPS, CI/CD, Configuración, Optimización

---

## 🔧 Estructura de Datos

Cada pregunta sigue la interfaz `Pregunta` definida en `types.ts`:

```typescript
interface Pregunta {
  id: number;           // ID único numérico
  pregunta: string;     // Texto de la pregunta
  opciones: string[];   // Array de 4 opciones
  correcta: number;     // Índice de la respuesta correcta (0-3)
  explicacion: string;  // Explicación detallada y contextual
  categoria: string;    // Categoría temática
}
```

Cada tema exporta:
- `preguntas[Tema]: Pregunta[]` - Array de preguntas
- `[tema]Info` - Objeto con metadatos del tema (id, título, descripción, temas, color, icono)

---

## 📝 Fuente Original

Las preguntas fueron transformadas del archivo `astro.md` ubicado en la raíz del proyecto, que contenía el banco de preguntas original en formato markdown del proyecto "FashionStore".

**Transformaciones aplicadas**:
- Conversión de formato markdown a TypeScript
- Generación de explicaciones contextuales basadas en el contenido
- Organización en 4 temas temáticos
- Asignación de categorías por pregunta
- Adaptación al formato de la interfaz `Pregunta`

---

## 🚀 Uso

Los temas están registrados automáticamente en `src/data/index.ts` y son accesibles a través de:

- `/quiz/sge` - Vista general con las 4 tarjetas de temas
- `/quiz/sge/astro-fundamentos` - Quiz de Fundamentos de Astro
- `/quiz/sge/supabase` - Quiz de Supabase y Base de Datos
- `/quiz/sge/stripe` - Quiz de Pagos con Stripe
- `/quiz/sge/coolify` - Quiz de Infraestructura y Despliegue

---

## 🎓 Objetivo Pedagógico

Este banco de preguntas está diseñado para evaluar el conocimiento completo del stack tecnológico requerido para desarrollar y desplegar un e-commerce moderno desde cero, cubriendo:

1. **Frontend moderno** con arquitectura de islas
2. **Backend as a Service** con PostgreSQL
3. **Procesamiento de pagos** seguro y PCI compliant
4. **DevOps** con contenedores y despliegue continuo

Ideal para estudiantes de DAM (Desarrollo de Aplicaciones Multiplataforma) en la asignatura de Sistema de Gestión Empresarial.

