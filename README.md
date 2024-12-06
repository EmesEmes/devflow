# Next.js

Next.js es un framework de desarrollo web fullstack basado en React que permite la creación de aplicaciones web estáticas y generadas desde el servidor. Ofrece una serie de características avanzadas que mejoran el rendimiento, la optimización para motores de búsqueda (SEO), la separación de código, el enrutamiento y la gestión de dependencias.

> Un framework sirve como herramienta, equipada con reglas y convenciones predefinidas que ofrece un enfoque estructuado para construir una aplicación. Proporciona un entorno que delinea la arquitectura general, los patrones de diseño y los flujos de trabajo, permitiendo a los desarrolladores centrarse en la implementación de lógica específica de la aplicación en lugar de ocuparse del diseño a bajo nivel.

> Un framework proporciona un marco de trabajo con soluciones precontruidas para funcionalidades comunes como la integración de bases de datos, gestión de enrutamiento, manejo de autenticación, etc

Next.js es escencialmente una extensión de React, que incorpora soluciones preconstruidas, funcionalidades listas para utilizar y funcionalidades adicionales. En otras palabras, Next.js está construido sobre React, ampliando sus capacidades.

## Características Principales

- **Renderizado Híbrido**: Soporte tanto para renderizado del lado del servidor (SSR) como para generación de sitios estáticos (SSG).
- **Optimización Automática**: Optimiza automáticamente las páginas para mejorar el rendimiento y la experiencia del usuario.
- **Enrutamiento Basado en Páginas**: Sistema de enrutamiento basado en la estructura de archivos, lo que facilita la creación de rutas.
- **Soporte para API**: Permite crear API endpoints directamente en la aplicación Next.js.
- **CSS y Sass**: Soporte incorporado para CSS y Sass, así como para módulos CSS.
- **Despliegue Fácil**: Integración con plataformas de despliegue como Vercel para un despliegue rápido y sencillo.

## Ventajas

- **Mejoras de Rendimiento**: Next.js optimiza automáticamente las aplicaciones para mejorar el rendimiento.
- **SEO Mejorado**: Gracias al renderizado del lado del servidor, las aplicaciones Next.js son más amigables para los motores de búsqueda.
- **Separación de Código**: Carga solo el código necesario para cada página, lo que reduce el tamaño de los paquetes y mejora la velocidad de carga.
- **Enrutamiento Simplificado**: El sistema de enrutamiento basado en archivos facilita la creación y gestión de rutas.
- **Gestión de Dependencias**: Maneja las dependencias de manera eficiente, asegurando que solo se carguen las necesarias.

## Recursos

- [Documentación Oficial](https://nextjs.org/docs)
- [Repositorio en GitHub](https://github.com/vercel/next.js)
- [Ejemplos y Tutoriales](https://nextjs.org/learn)

Next.js es una excelente opción para desarrolladores que buscan crear aplicaciones web rápidas, eficientes y optimizadas para SEO, con una experiencia de desarrollo mejorada gracias a sus características avanzadas y su integración con React.

# Instalación

```
npx create-next-app@latest
```

## Estructura de un proyecto Next.js

- `tsconfig.json`: Este es el archivo de configuración de TypeScript. Define qué se debe verificar, qué se debe ignorar y las reglas que se deben seguir.

- `tailwind.config.ts`: Aquí se configura TailwindCSS. Se puede ampliar TailwindCSS personalizando colores, tamaños, sombras, complementos o cualquier otra cosa que se necesite.

- `README.md`: Un archivo Markdown simple que explica cómo ejecutar el proyecto y proporciona información relevante.

- `postcss.config.mjs`: Es un archivo de configuración para PostCSS, una herramienta que se utiliza para procesar CSS con varios plugins o complements. Aquí se puede ver que menciona tailwindcss como plugin, lo que permite usar sus primeras clases de utilidad en el proyecto.

- `package-lock.json`: Es un archivo que bloquea las versiones de las dependencias y sus subdependencias, garantizando que todos los que trabajan en el proyecto utilicen exactamente las mismas versiones.

- `package.json`: Este archivo contiene todas las dependencias y scripts del proyecto.

- `next-env.d.ts`: Es un archivo de declaración de TypeScript para Next.js. Y como se dice aquí, no se debe modificar ni poner ningún tipo de TypeScript aquí. Es específicamente para Next.js.

- `next.config.ts`: Este archivo permite configurar características de Next.js, como opciones experimentales, configuraciones de imagen, configuraciones de compilación y otras.

- `.gitignore`: Este archivo contiene los archivos y carpetas que git ignorará en el manejo de versiones.

- `.eslintrc.json`: Para configurar ESLint

- `public`: Un lugar para archivos estáticos. Coloqcar siempre aquí imágenes y otros datos estáticos.

- `node_modules`: Es una carpeta que contiene todas las dependencias (paquetes) y el código necesario para ejecutar la aplicación.

- `app`: La carpeta `app` en un proyecto Next.js contiene las rutas y componentes de la aplicación organizados de manera modular. Aquí hay una descripción de los elementos comunes que puedes encontrar en esta carpeta:

  - `fonts`: Aquí se puede almacenar archivos de fuentes, importarlos a la aplicación y usarlos fácilmente. Tus propias fuentes alojadas.

  - `favicon.ico`: Cualquier archivo con este nombre en la raíz de la carpeta de la aplicación se convertirá en el favicono del sitio web. Es una convención de nombres de Next.js para agregar faviconos.

  - `globals.css`: Aquí es donde se puede escribir todas las utilidades CSS o TailwindCSS personalizadas.

  - `layout.tsx`: Este es el punto de entrada principal de la aplicación. Todo lo que se haga aquí se aplicará en todas las páginas y rutas. Por eso, se ha importado fuentes, estilos e información de metadatos aquí.

  - `page.tsx`: Este archivo representa la página de inicio o `/` ruta del sitio.

# Configurar ESlint & Prettier

## Agregar JavaScript Standar Style

[Enlace](https://standardjs.com/rules.html)

`npm install eslint-config-standard`

- Agregar Standard a .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript", "standard"]
}
```

## Agregar plugin para tailwind

Formatea las clases de tailwind de forma ordenada.

`npm install eslint-plugin-tailwindcss`

- Agregar el plugin a .eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended"
  ]
}
```

## Instalar Prettier

`npm install prettier`

- Instalar la configuración de Prettier para ESlint

`npm install eslint-config-prettier`

- Agregar Prettier a eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ]
}
```

## Integrar ESlint y Prettier en VSCode

Ayuda a aplicar recomendaciones de ESlint y Prettier cada que se guarda o se sale de un archivo.

1. Crear una cartepa llamada `.vscode` y agregar un archivo `settings.json`

2. En el archivo agregar:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

3. Configuración recomendada para el curso:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
  },
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.jsxSingleQuote": false,
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "always",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Manejar el orden de los imports

`npm install eslint-plugin-import --save-dev`

- Agregar a eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "plugins": ["import"]
}
```

## Reglas de Eslint recomendades del curso

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "plugins": ["import"],
  "rules": {
    "import/order": [
      "error",
      {
        "groups": [
          "builtin", // Built-in types are first
          "external", // External libraries
          "internal", // Internal modules
          ["parent", "sibling"], // Parent and sibling types can be mingled together
          "index", // Then the index file
          "object" // Object imports
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "@app/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
  "ignorePatterns": ["components/ui/**"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
}
```

> Para que todo funcione bien se debe tener instalado las siguientes extenciones en VSCode: ESlint - Microsoft | Prettier - Prettier | Prettier Eslint - Rebecca Vest

# React client/server Components

## React Server Components (RSC)

Los Server Components se procesan en el servidor y su output HTML se envía al cliente. Dado que se procesan en el servidor, pueden acceder directamente a los recursos del servidor, como las bases de datos o el sistema de archivos. Esto ayuda a reducir la cantidad de JavaScript enviado al cliente, lo que mejora el rendimiento.

Los Server Components son útiles cuando:

- Se necesita acceso directo a los recursos del lado del servidor (como acceder a archivos en un sistema de archivos)
- Se desea mantener información confidencial, como tokens de acceso, segura en el servidor.

Si el componente requiere interactividad del navegador, como hacer clic en botones, navegar a diferentes páginas y enviar formularios, entonces debe convertirlo en un componente de cliente.

## React Client Component

Los Client Components son renderizados en el lado del cliente (en el navegador). Para usarlos en Next.js, se debe agregar la bandera `"use client"` en la parte superior del componente.

Los componentes del servidor se renderizan solo en el lado del servidor, mientras que los componentes del cliente se renderizan previamente en el servidor para crear un shell estático y luego se hidratan en el lado del cliente.

> La hidratación (hydration) en Next.js es el proceso mediante el cual el código JavaScript del lado del cliente toma el control de una página que ha sido pre-renderizada en el servidor. Esto permite que la página se vuelva interactiva. En otras palabras, después de que el HTML estático ha sido enviado al navegador y renderizado, React se "hidrata" sobre ese HTML, adjuntando los manejadores de eventos y convirtiendo la página en una aplicación React completamente funcional.

Esto significa que todo dentro del componente del cliente que no requiere interactividad o no depende del navegador se renderiza en el servidor. El código o las partes que dependen del navegador o requieren interactividad se dejan como marcadores de posición durante la renderización previa del lado del servidor. Cuando esto llega al cliente, el navegador renderiza los componentes del cliente y completa los marcadores de posición que dejó el servidor.

> Por eso un console.log de un client component también se muestra en el terminal.

# Tipos de renderizado

## SSR Server Side Rendering

SSR (Server-Side Rendering) es una técnica de renderizado en la que las páginas web se generan en el servidor en lugar de en el cliente. En el contexto de Next.js, SSR permite que las páginas se rendericen en el servidor con cada solicitud, lo que puede mejorar el rendimiento y la optimización para motores de búsqueda (SEO). Esto significa que el contenido de la página está completamente renderizado antes de ser enviado al navegador del usuario, lo que puede resultar en tiempos de carga más rápidos y una mejor experiencia de usuario.

## SSG Static Site Generation

SSG (Static Site Generation) es una técnica de renderizado en la que las páginas web se generan en tiempo de compilación y se sirven como archivos HTML estáticos. En el contexto de Next.js, SSG permite pre-renderizar páginas en el momento de la construcción, lo que resulta en tiempos de carga extremadamente rápidos y una mejor escalabilidad. Las páginas generadas de esta manera pueden ser servidas directamente desde un CDN, lo que mejora aún más el rendimiento y la experiencia del usuario.

## CSR Client-Side Rendering

CSR (Client-Side Rendering) es una técnica de renderizado en la que las páginas web se generan en el navegador del cliente utilizando JavaScript. En el contexto de Next.js, CSR significa que el contenido de la página se carga y se renderiza en el navegador después de que se haya descargado el JavaScript necesario. Esto puede resultar en tiempos de carga iniciales más lentos en comparación con SSR y SSG, pero permite una experiencia de usuario más interactiva y dinámica una vez que la página ha sido cargada.

## ISR Incremental Static Regeneration

ISR (Incremental Static Regeneration) es una técnica de renderizado que combina lo mejor de SSG y SSR. En el contexto de Next.js, ISR permite actualizar el contenido estático de una página después de la construcción inicial sin necesidad de reconstruir todo el sitio. Esto se logra regenerando las páginas estáticas en el servidor de manera incremental, basándose en un intervalo de tiempo configurado. Esto permite que las aplicaciones Next.js tengan contenido actualizado y dinámico con el rendimiento de un sitio estático.

## PPR Partial Prerendering

El "partial prerendering" (pre-renderizado parcial) es una técnica utilizada en frameworks como Next.js para mejorar el rendimiento y la experiencia del usuario al renderizar solo una parte de la página en el servidor antes de enviarla al cliente. Esto permite que ciertas partes de la página se generen estáticamente en el servidor, mientras que otras partes se renderizan dinámicamente en el cliente.

En el contexto de Next.js, el pre-renderizado parcial puede combinar técnicas como SSR (Server-Side Rendering) y SSG (Static Site Generation) para renderizar partes de la página en el servidor y otras en el cliente. Esto es útil cuando algunas partes de la página necesitan ser dinámicas y otras pueden ser estáticas.

## Dynamic Routing

El enrutamiento dinámico (Dynamic Routing) es una técnica en la que las rutas de una aplicación web se generan de manera dinámica en lugar de estar predefinidas. En el contexto de Next.js, el enrutamiento dinámico permite crear rutas basadas en datos o parámetros variables. Esto se logra utilizando corchetes en los nombres de los archivos dentro de la carpeta `pages`, lo que permite capturar segmentos de la URL como parámetros.

Por ejemplo, para crear una ruta dinámica para perfiles de usuario, puedes crear un archivo llamado `[id].js` dentro de la carpeta `pages/users`. Esto capturará cualquier segmento de URL después de `/users/` como un parámetro `id`.

# File Based Routing

En Next.js 15, el enrutamiento basado en archivos (File Based Routing) sigue siendo una característica fundamental. La estructura y el funcionamiento son similares a las versiones anteriores, donde la estructura de archivos dentro de la carpeta pages define automáticamente las rutas de la aplicación.

Las carpetas dentro de la carpeta `app` se convierten en rutas, dentro de estas carpetas se debe crear un archivo llamado `page` con extención js, jsx o tsx, que es el que contendra el código de esa ruta

## Nested Routes

En Next.js 15, las rutas anidadas permiten organizar y estructurar mejor las rutas de tu aplicación mediante la creación de subcarpetas dentro de la carpeta app. Esto facilita la creación de rutas jerárquicas y más complejas.

- app/
  - page.js
  - about/
    - page.js
  - blog/
    - page.js
    - [postId]/
      - page.js
  - users/
    - page.js
    - [id]/
      - page.js

### Ventajas de las rutas anidadas

1. Organización: Mejora la organización del código al agrupar archivos relacionados.

2. Escalabilidad: Facilita la gestión de rutas complejas y jerárquicas.

3. Claridad: La estructura de carpetas refleja la estructura de rutas de la aplicación, lo que hace que el código sea más fácil de entender y mantener.

## Dinamic Routes

Las rutas dinámicas en Next.js 15 permiten crear rutas basadas en parámetros variables, lo que es útil para manejar contenido dinámico como perfiles de usuario, publicaciones de blog, etc. Estas rutas se definen utilizando corchetes en los nombres de las carpetas dentro de la carpeta app.

- app/
  - page.js
  - about/
    - page.js
  - blog/
    - page.js
    - [postId]/ `RUTA DINÁMICA`
      - page.js
  - users/
    - page.js
    - [id]/
      - page.js

### Cómo funciona

1. Definición de Rutas: Utiliza corchetes en los nombres de las carpetas para definir segmentos de URL dinámicos.

2. Acceso a Parámetros: Los parámetros de la URL se pueden acceder a través de `params` en el componente.

### Ventajas de las rutas dinámicas

1. Flexibilidad: Permite manejar rutas que dependen de datos dinámicos.

2. Escalabilidad: Facilita la creación de aplicaciones con contenido dinámico sin necesidad de definir manualmente cada ruta.

## Route Groups

Son una característica que permite agrupar rutas relacionadas bajo una misma estructura, sin afectar la URL final. Esto es útil para organizar mejor el código y aplicar configuraciones específicas a un grupo de rutas.

- app/
  - (admin)/
    - dashboard/
      - page.js
    - users/
      - page.js
  - (marketing)/
    - blog/
      - page.js
    - contact/
      - page.js
  - page.js

### Cómo funciona

1. Definición de Grupos: Los grupos de rutas se definen utilizando paréntesis en los nombres de las carpetas.

2. URL Final: Las carpetas de grupo no afectan la URL final de las rutas.

### Ventajas de los Route Groups

1. Organización: Mejora la organización del código al agrupar rutas relacionadas.

2. Configuración: Permite aplicar configuraciones específicas a un grupo de rutas.

3. Claridad: Facilita la comprensión de la estructura de la aplicación sin afectar las URLs.
