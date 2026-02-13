import type { Pregunta } from '../types';

export const preguntasStripe: Pregunta[] = [
  {
    id: 46,
    pregunta: 'Según el enunciado, ¿qué pasarela de pago debemos investigar y utilizar?',
    opciones: [
      'PayPal.',
      'Redsys.',
      'Stripe.',
      'Bizum manual.'
    ],
    correcta: 2,
    explicacion: 'Stripe es la pasarela de pago líder mundial para e-commerce, ofreciendo APIs modernas, documentación excelente y soporte para múltiples métodos de pago. Su integración con SPAs y frameworks modernos es superior.',
    categoria: 'Integración'
  },
  {
    id: 47,
    pregunta: '¿Qué concepto de Stripe representa la "intención" de realizar un cobro antes de que ocurra?',
    opciones: [
      'PaymentIntent.',
      'Charge.',
      'Customer.',
      'Invoice.'
    ],
    correcta: 0,
    explicacion: 'PaymentIntent representa la intención de cobrar antes de capturar el pago. Trackea el ciclo de vida completo desde la creación hasta la confirmación, manejando autenticación 3D Secure y reintentos automáticamente.',
    categoria: 'PaymentIntent'
  },
  {
    id: 48,
    pregunta: 'En la integración de Stripe, ¿qué información NO debe pasar nunca por nuestro servidor ni guardarse en nuestra base de datos?',
    opciones: [
      'El importe de la compra.',
      'El email del cliente.',
      'El número completo de la tarjeta de crédito y el CVC.',
      'La descripción del producto.'
    ],
    correcta: 2,
    explicacion: 'Los datos de tarjeta deben ir directamente de Stripe.js (cliente) a Stripe (servidores). Esto mantiene tu servidor fuera del scope PCI-DSS, reduciendo drásticamente requisitos de compliance y responsabilidad en caso de brechas.',
    categoria: 'Seguridad'
  },
  {
    id: 49,
    pregunta: '¿Por qué es importante configurar la moneda en EUR para este proyecto?',
    opciones: [
      'Porque Stripe solo funciona en dólares si no se cambia.',
      'Porque el proyecto es para un cliente en España y se requiere soporte de euros.',
      'Porque es más barato.',
      'Porque Astro no soporta otras monedas.'
    ],
    correcta: 1,
    explicacion: 'FashionStore es para un cliente español. Usar EUR evita conversiones de moneda que añaden comisiones y confusión. Stripe requiere especificar "currency: \'eur\'" al crear PaymentIntents.',
    categoria: 'Integración'
  },
  {
    id: 50,
    pregunta: '¿Qué herramienta nos permite simular pagos seguros en el frontend sin manejar datos sensibles?',
    opciones: [
      'Stripe Elements / Stripe.js.',
      'Un formulario HTML básico.',
      'Un prompt de JavaScript.',
      'Enviar los datos por URL.'
    ],
    correcta: 0,
    explicacion: 'Stripe Elements son componentes UI preconstruidos y seguros para capturar datos de pago. Stripe.js los tokeniza sin que tu código JavaScript acceda a números de tarjeta, simplificando compliance PCI.',
    categoria: 'Integración'
  },
  {
    id: 51,
    pregunta: '¿Qué es un Webhook en el contexto de Stripe?',
    opciones: [
      'Un gancho para pescar clientes.',
      'Una notificación automática que Stripe envía a nuestro servidor cuando ocurre un evento (ej: pago completado).',
      'Un tipo de base de datos.',
      'El botón de pagar.'
    ],
    correcta: 1,
    explicacion: 'Los webhooks son callbacks HTTP que Stripe envía a tu servidor cuando ocurren eventos (pago completado, fallido, reembolsado). Son críticos para confirmar pedidos de forma segura, independientemente del estado del cliente.',
    categoria: 'Webhooks'
  },
  {
    id: 52,
    pregunta: 'Al crear un PaymentIntent, ¿qué unidad de valor espera Stripe para la cantidad (amount)?',
    opciones: [
      'Euros con decimales (ej: 10.50).',
      'La unidad más pequeña de la moneda (céntimos para EUR). Ej: 1050 para 10.50€.',
      'Bitcoins.',
      'Strings de texto.'
    ],
    correcta: 1,
    explicacion: 'Stripe usa enteros en la unidad más pequeña de la moneda para evitar errores de punto flotante. Para EUR: céntimos (1050 = 10.50€). Para JPY (sin decimales): el valor directo.',
    categoria: 'PaymentIntent'
  },
  {
    id: 53,
    pregunta: "Si un pago falla, ¿quién nos informa del estado status: 'failed'?",
    opciones: [
      'El objeto PaymentIntent devuelto por la API de Stripe.',
      'El navegador del cliente se cierra.',
      'Supabase borra el usuario.',
      'No se puede saber.'
    ],
    correcta: 0,
    explicacion: 'El PaymentIntent tiene un campo "status" que puede ser: requires_payment_method, processing, succeeded, canceled, o failed. Este estado se actualiza en tiempo real y es devuelto por la API.',
    categoria: 'PaymentIntent'
  },
  {
    id: 54,
    pregunta: '¿Qué claves de Stripe necesitamos en el archivo .env?',
    opciones: [
      'Solo la clave pública.',
      'La STRIPE_PUBLISHABLE_KEY (pública) y la STRIPE_SECRET_KEY (privada).',
      'El número de cuenta bancaria.',
      'La clave de Supabase.'
    ],
    correcta: 1,
    explicacion: 'La Publishable Key se usa en el cliente (Stripe.js) para tokenizar tarjetas. La Secret Key se usa SOLO en el servidor para crear PaymentIntents y acceder a APIs sensibles. Nunca expongas la Secret Key.',
    categoria: 'Seguridad'
  },
  {
    id: 55,
    pregunta: 'Según los apuntes MCP, ¿qué es un "Customer" en Stripe?',
    opciones: [
      'Un producto.',
      'Una entidad que representa al usuario/empresa que realiza los pagos.',
      'Un descuento.',
      'Una suscripción cancelada.'
    ],
    correcta: 1,
    explicacion: 'Un Customer en Stripe agrupa información de un comprador: métodos de pago guardados, historial de transacciones, metadatos personalizados. Es útil para compras recurrentes y facturación.',
    categoria: 'Integración'
  },
  {
    id: 56,
    pregunta: '¿Para qué sirve el campo metadata en una transacción de Stripe?',
    opciones: [
      'Para guardar fotos.',
      'Para adjuntar datos personalizados nuestros (ej: user_id, cart_id) a la transacción de Stripe.',
      'Para hackear la transacción.',
      'Es un campo obligatorio para la fecha.'
    ],
    correcta: 1,
    explicacion: 'metadata permite adjuntar pares clave-valor personalizados a objetos de Stripe (PaymentIntent, Customer, etc.). Es ideal para vincular transacciones con IDs internos de tu sistema para reconciliación.',
    categoria: 'Integración'
  },
  {
    id: 57,
    pregunta: '¿Qué función se utiliza en el frontend para confirmar el pago con la tarjeta introducida?',
    opciones: [
      'stripe.payMoney()',
      'stripe.confirmCardPayment(clientSecret, { payment_method: ... })',
      'stripe.sendMoney()',
      "fetch('/api/pagar')"
    ],
    correcta: 1,
    explicacion: 'stripe.confirmCardPayment() toma el clientSecret del PaymentIntent (obtenido del servidor) y los datos de la tarjeta (del Element) para completar el pago. Maneja 3D Secure automáticamente.',
    categoria: 'Integración'
  },
  {
    id: 58,
    pregunta: 'Si usamos Cloudinary (según la guía adicional) en lugar de Supabase Storage, ¿qué ventaja principal ofrece?',
    opciones: [
      'Es más barato siempre.',
      'Permite transformación y optimización de imágenes al vuelo (cambiar tamaño, formato f_auto) mediante la URL.',
      'No requiere internet.',
      'Se integra peor con React.'
    ],
    correcta: 1,
    explicacion: 'Cloudinary es un CDN especializado en media que permite transformaciones via URL: redimensionar, cambiar formato (WebP/AVIF), optimizar calidad, aplicar efectos. No necesitas generar thumbnails manualmente.',
    categoria: 'Integración'
  },
  {
    id: 59,
    pregunta: '¿Qué es un "Upload Preset" en Cloudinary?',
    opciones: [
      'Una foto predefinida.',
      'Una configuración que permite subir archivos sin autenticación de servidor (unsigned) definiendo reglas básicas.',
      'Una carpeta en mi PC.',
      'Un plugin de Astro.'
    ],
    correcta: 1,
    explicacion: 'Un Upload Preset define configuraciones (carpeta destino, transformaciones automáticas, restricciones) que permiten uploads desde el cliente sin exponer API secrets. El preset ID se usa en lugar de firmar cada request.',
    categoria: 'Integración'
  },
  {
    id: 60,
    pregunta: '¿Cuál es el flujo correcto al subir una imagen de producto?',
    opciones: [
      'Subir a la BD -> Generar URL.',
      'Subir al Storage/CDN -> Obtener URL -> Guardar URL en la Base de Datos.',
      'Guardar la imagen en la carpeta src del proyecto en producción.',
      'Enviar la imagen por email al admin.'
    ],
    correcta: 1,
    explicacion: 'Las imágenes se suben a Storage/CDN especializado (Supabase Storage, Cloudinary, S3) que retorna una URL pública. Esta URL se guarda en la BD. Así separas datos relacionales de assets binarios para mejor rendimiento y escalabilidad.',
    categoria: 'Integración'
  }
];

export const stripeInfo = {
  id: 'stripe',
  titulo: 'Pagos con Stripe',
  descripcion: 'Integración de pasarela de pago, PaymentIntents, seguridad y webhooks',
  temas: [
    'PaymentIntent y flujo de pago',
    'Seguridad y PCI Compliance',
    'Webhooks y confirmaciones',
    'Integraciones con CDN (Cloudinary)'
  ],
  color: 'from-violet-500 to-purple-600',
  icono: '💳'
};
