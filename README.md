```markdown
# Calculadora de Propinas

Este proyecto es una calculadora de propinas desarrollada con React, TypeScript y Tailwind CSS. Permite al usuario ingresar el monto de la cuenta y seleccionar un porcentaje de propina para calcular la cantidad total a pagar, y total a pagar por persona.

## Funcionalidades

- Ingreso del monto de la cuenta
- Seleccionar o escribir el porcentaje de propina
- Cálculo automático de la propina, total, y total por persona
- **Modo Oscuro**: Alterna entre el modo claro y oscuro para una mejor experiencia visual.
- **Cambio de Moneda**: Permite al usuario cambiar entre Dólares y Euros para los cálculos.
- **Cambio de Idioma**: Opción para cambiar el idioma de la interfaz entre Inglés y Español.

## Tecnologías Utilizadas

- Vite
- React
- TypeScript
- Tailwind CSS

## Instalación

Para clonar y ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. **Clonar el repositorio**:
   
   ```bash
   git clone https://github.com/JoseSojo/rt2_calcular_propina
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd rt2_calcular_propina-propinas
   ```

3. **Instalar las dependencias**:

   ```bash
   npm install
   ```

## Ejecutar el Proyecto

Una vez instaladas las dependencias, puedes ejecutar el proyecto con el siguiente comando:

  ```bash
  npm run dev
  ```

Esto lanzará la aplicación en el navegador, normalmente en `http://localhost:5173`.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
/calculadora-propinas
├── /public           # Archivos públicos
├── /src              # Código fuente de la aplicación
│   ├── /context      # Contexto en react
│   ├── /assets       # Imagenes y archivos estáticos
│   ├── /service      # Capa de servicio (Lógica)
│   ├── /types        # Tipos e interface en typescript
│   ├── /UI           # Componentes y elementos visuales
│   └── App.tsx       # Componente principal
│   └── main.tsx      # Punto de entrada
│   └── index.css     # Único archivo css
├── index.html        # Archivo HTML principal
└── package.json      # Dependencias y scripts
```

## Configuración de Tailwind CSS

Asegúrate de tener Tailwind CSS configurado correctamente. Si no lo has hecho aún, puedes seguir estos pasos:

1. Instalar Tailwind CSS, PostCSS y Autoprefixer:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Iniciar la configuración de Tailwind:

   ```bash
   npx tailwindcss init -p
   ```

3. En tu archivo `tailwind.config.js`, asegúrate de agregar la ruta a tus archivos de plantilla:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ['./index.html', './src/**/*.tsx'],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. Agrega las directivas de Tailwind a tu archivo CSS principal (por ejemplo, `src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

¡Gracias por visitar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.
```
