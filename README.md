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

# Autenticación y Autorización

La autenticación y la autorización son dos conceptos esenciales en la seguridad web.

La `autenticación` es el proceso de verificar la identidad de un usuario. Garantiza que la persona o entidad que accede al sistema es quien dice ser.

Por otro lado, la `autorización` determina qué acciones puede realizar un usuario dentro del sistema después de haber sido autenticado. Define los permisos y los niveles de acceso otorgados a los usuarios en función de su identidad y función.

# Autenticación

Es fundamental para proteger la información confidencial y garantizar que solo los usuarios autorizados puedan acceder a ella. Es la primera línea de defensa contra el acceso no autorizado y las violaciones de datos.

Sin una autenticación adecuada, cualquiera podría acceder a su sistema y potencialmente robar o manipular sus datos. Esto podría generar pérdidas financieras, daños a la reputación y consecuencias legales.

## Tipos de Autenticación

### Basado en Sesiones

Con la autenticación basada en sesiones, se crea una sesión en el servidor para cada usuario después de que inicia sesión. Luego, el servidor envía un identificador de sesión único (generalmente almacenado como una cookie) al cliente, que se utiliza para solicitudes posteriores para autenticar al usuario.

Una cookie es un pequeño fragmento de datos que un servidor web envía al navegador web de un usuario. El navegador almacena estos datos y los envía de vuelta con cada solicitud posterior al mismo servidor. Las cookies se utilizan habitualmente para diversos fines, entre ellos, la gestión de sesiones, el seguimiento de las preferencias del usuario y la personalización de las experiencias del usuario.

Se puede pensar en las cookies como una forma que tienen los sitios web de recordar a los usuarios y sus preferencias en diferentes sesiones.

#### Flujo de trabajo

1. Cuando un usuario inicia sesión, el servidor genera un ID de sesión único y almacena datos de la sesión (como ID de usuario, tiempo de expiración, etc.) en el lado del servidor.
2. El servidor establece una cookie en la respuesta que contiene el ID de la sesión.
3. Para solicitudes posteriores, el cliente envía el ID de sesión junto con la solicitud.
4. El servidor verifica el ID de sesión con los datos de sesión almacenados para autenticar al usuario.

#### Ventajas

1. Seguro: los datos de la sesión se almacenan en el servidor, lo que reduce el riesgo de robo de tokens.
2. Fácil de implementar: muchos marcos web proporcionan soporte integrado para la gestión de sesiones.
3. Caducidad automática: las sesiones se pueden configurar para que caduquen después de un período determinado, lo que mejora la seguridad.

#### Contras

1. Problemas de escalabilidad: almacenar datos de sesión en el servidor puede generar problemas de escalabilidad, especialmente en sistemas distribuidos.
2. Almacenamiento del lado del servidor: requiere recursos del servidor para administrar los datos de la sesión, lo que aumenta la carga del servidor.
3. Vulnerable a ataques CSRF: los identificadores de sesión almacenados en cookies pueden ser susceptibles a ataques CSRF si no se protegen adecuadamente.

### Basado en tokens (JWT)

En la autenticación basada en tokens, se genera un token que contiene información del usuario al iniciar sesión correctamente y se envía al cliente. Este token se incluye luego en solicitudes posteriores para autenticar al usuario.

#### Flujo de trabajo

1. Tras una autenticación exitosa, el servidor genera un JWT que contiene información del usuario y lo firma con una clave secreta.
2. El servidor envía el JWT al cliente, generalmente en el cuerpo de la respuesta o como encabezado.
3. El cliente incluye el JWT en el encabezado de las solicitudes posteriores.
4. El servidor verifica la firma del JWT y decodifica su carga útil para autenticar al usuario.

#### Ventajas

1. Sin estado: los tokens contienen toda la información necesaria para la autenticación, lo que elimina la necesidad de almacenamiento del lado del servidor.
2. Escalable: los tokens se pueden distribuir fácilmente en múltiples servidores, lo que mejora la escalabilidad.
3. Seguridad mejorada: los tokens se pueden cifrar y firmar para evitar manipulaciones y accesos no autorizados.

#### Contras

1. Gestión de tokens: requiere un esfuerzo adicional para gestionar el ciclo de vida del token, incluida la expiración y la revocación.
2. Tamaño del token: los tokens pueden ser más grandes que los identificadores de sesión, lo que aumenta la sobrecarga de la red.
3. Vulnerable al robo de tokens: si no se protegen adecuadamente (por ejemplo, a través de HTTPS), los tokens pueden ser interceptados y utilizados por actores maliciosos.

### OAuth

OAuth es un protocolo de autorización delegada que permite que servicios de terceros accedan a los recursos de un usuario sin exponer sus credenciales. Los usuarios pueden otorgar acceso limitado a sus datos a aplicaciones externas.

#### Flujo de trabajo

1. Registre su aplicación con el proveedor OAuth y obtenga las credenciales del cliente (ID de cliente y secreto de cliente).
2. Redirigir a los usuarios al punto final de autenticación del proveedor OAuth.
3. Después de la autenticación, el proveedor OAuth redirige al usuario a su aplicación con un código de autorización.
4. Cambie el código de autorización por un token de acceso y, opcionalmente, un token de actualización.
5. Utilice el token de acceso para acceder a los recursos del usuario en nombre del usuario.

#### Ventajas

1. Inicio de sesión único (SSO): los usuarios pueden acceder a múltiples servicios con un único conjunto de credenciales, lo que mejora la experiencia del usuario.
2. Permisos granulares: los usuarios pueden otorgar acceso limitado a sus recursos, mejorando la privacidad y la seguridad.
3. Ampliamente compatible: OAuth es un estándar ampliamente adoptado y utilizado por muchos servicios y plataformas populares.

#### Contras

1. Complejidad: Implementar OAuth puede ser complejo y requerir comprensión del protocolo y sus diversos flujos.
2. Dependencia de confianza: los usuarios deben confiar en servicios de terceros para acceder a sus datos, lo que genera preocupaciones sobre la privacidad.
3. Gestión de tokens: requiere el manejo de tokens de acceso y tokens de actualización, lo que agrega complejidad al flujo de autenticación.

### Autenticación básica

La autenticación básica implica que los usuarios proporcionen sus credenciales (nombre de usuario y contraseña) en cada solicitud, que se codifican y se envían al servidor. Es simple pero menos seguro en comparación con otros métodos.

#### Flujo de trabajo

1. Los clientes codifican el nombre de usuario y la contraseña en una cadena codificada en Base64 y la incluyen en el encabezado de la solicitud.
2. El servidor decodifica la cadena, extrae las credenciales y las valida con las credenciales almacenadas.

#### Ventajas

1. Fácil de implementar: requiere una instalación y configuración mínimas, lo que hace que sea fácil comenzar.
2. Soporte universal: la autenticación básica es compatible con prácticamente todos los navegadores y servidores web.
3. Sin gestión de sesiones: no requiere almacenamiento del lado del servidor ni gestión de sesiones, lo que reduce la carga del servidor.

#### Contras

1. Falta de seguridad: Las credenciales se envían con cada solicitud, lo que aumenta el riesgo de interceptación y acceso no autorizado.
2. Sin cifrado: las credenciales se envían en texto sin formato, lo que las hace vulnerables a la interceptación.
3. Funcionalidad limitada: no admite funciones como administración de sesiones o permisos granulares, lo que limita su uso en aplicaciones complejas.

> Evitar utilizar la autenticación básica para aplicaciones sensibles, ya que las credenciales se envían con cada solicitud, lo que las hace susceptibles a ser interceptadas.

> Estos métodos de autenticación tienen distintos propósitos y distintos niveles de seguridad y complejidad. La elección del método adecuado depende de factores como los requisitos de la aplicación, las consideraciones de seguridad y la experiencia del usuario.

## Mecanismos de gestión de estado HTTP

Mecanismos de gestión de estado HTTP
HTTP es un protocolo sin estado, lo que significa que no mantiene el estado entre solicitudes. Sin embargo, las aplicaciones web suelen requerir el mantenimiento del estado para administrar las sesiones de los usuarios, realizar un seguimiento de sus preferencias y personalizar sus experiencias.

Para abordar esto, se han desarrollado varios mecanismos de gestión de estado, incluidas cookies, almacenamiento local, almacenamiento de sesiones y más.

### Cookies

Las cookies son pequeños fragmentos de datos que el servidor almacena en el navegador web del usuario. Se utilizan habitualmente para la gestión de sesiones, el seguimiento de las preferencias del usuario y la personalización de las experiencias del usuario.

El cliente envía cookies con cada solicitud al mismo servidor, lo que permite que el servidor identifique al usuario y mantenga el estado en todas las solicitudes. Esto sucede automáticamente una vez que el servidor configura la cookie, lo que la convierte en una forma conveniente de administrar las sesiones de usuario.

### Local Storage

El Local Storage es un mecanismo de almacenamiento web que permite almacenar datos en el navegador web del usuario. Proporciona una interfaz de almacenamiento de clave-valor simple y se utiliza comúnmente para conservar las preferencias del usuario, almacenar datos en caché y almacenar el estado de la aplicación.

Proporciona una mayor capacidad de almacenamiento que las cookies (normalmente hasta 5-10 MB por dominio) y es accesible a través de las API de JavaScript.

El almacenamiento local se utiliza comúnmente para almacenar en caché activos estáticos, almacenar preferencias de usuario y almacenar datos sin conexión en aplicaciones web progresivas (PWA).

### Session Storage

El Session Storage es similar al almacenamiento local, pero se borra cuando finaliza la sesión del usuario (es decir, cuando se cierra el navegador). Se utiliza habitualmente para almacenar datos temporales que no deben persistir entre sesiones.

El uso del almacenamiento de sesiones puede ayudar a mejorar la seguridad al garantizar que los datos confidenciales no se almacenen más allá de la sesión del usuario.

A menudo se utiliza para el almacenamiento temporal de datos, como datos de formularios y elementos del carrito de compras, que no deben persistir en las distintas sesiones del navegador.

### IndexedDB

IndexedDB es una API de bajo nivel para el almacenamiento del lado del cliente de cantidades significativas de datos estructurados, incluidos archivos/blobs.

Proporciona una solución de almacenamiento más potente y flexible en comparación con el Local Storage y el Session Storage, pero requiere una lógica de programación más compleja.

Se utiliza comúnmente para almacenar grandes conjuntos de datos, sincronización de datos sin conexión y consultas de datos complejas en aplicaciones web.

> Algunas de las opciones anteriores se utilizan para almacenar datos de sesión en el lado del cliente, mientras que otras se utilizan para el almacenamiento y almacenamiento en caché de datos más generales.

> La elección del mecanismo de gestión de estado depende de factores como el tipo de datos que se almacenan, los requisitos de la aplicación y la experiencia del usuario.

# Autorización

Al implementar la autenticación, también tendremos que verificar la identidad del usuario y asegurarnos de que tenga los permisos necesarios para acceder a los recursos solicitados en cada solicitud. Ahí es donde entra en juego la autorización.

Este proceso implica validar las credenciales del usuario, administrar las sesiones del usuario y aplicar políticas de control de acceso basadas en el rol y los permisos del usuario.

## Qué es un TOkes de Sesión (Session Token)?

Un token de sesión es un identificador único que se utiliza para autenticar la sesión de un usuario. Normalmente se genera durante el proceso de autenticación y se utiliza para asociar a un usuario con sus datos de sesión en el servidor.

> Es una práctica común almacenar tokens de sesión en el lado del cliente y enviarlos con cada solicitud para autenticar al usuario.

Tener en cuenta que los tokens de sesión no están asociados únicamente con la autenticación basada en sesión, sino que también se pueden usar con la autenticación basada en tokens en forma de tokens portadores como JSON Web Tokens (JWT).

Aquí, es un término general utilizado para referirse al identificador único utilizado para autenticar la sesión de un usuario.

## Diferentes formas de almacenar sesiones para autorización

Existen varios métodos que se utilizan comúnmente para almacenar tokens de sesión para verificar cada solicitud del cliente al servidor:

### Cookies

Los tokens de sesión suelen almacenarse como cookies en el navegador del cliente. El servidor establece una cookie que contiene el token de sesión durante el proceso de autenticación y el cliente envía automáticamente esta cookie con cada solicitud posterior.

#### Ventajas

1. Se envía automáticamente con cada solicitud, lo que simplifica la implementación.
2. Las cookies tienen funciones de seguridad integradas, como los indicadores HttpOnly y Secure.

#### Contras

1. Vulnerable a ataques CSRF si no se protege adecuadamente.
2. Limitado a la política del mismo origen, restringiendo las solicitudes de origen cruzado.
3. De tamaño limitado y puede no ser adecuado para almacenar grandes cantidades de datos.

### Encabezados de autorización / Authorization headers (Bearer tokens)

Authorization headers, como JSON Web Tokens (JWT), son otro método común para almacenar tokens de sesión.

Después de una autenticación exitosa, el servidor genera un token que contiene información del usuario y lo firma. Luego, este token se envía al cliente, generalmente en el cuerpo de la respuesta, y el cliente lo incluye en el encabezado de autorización de las solicitudes posteriores.

#### Ventajas

1. Los tokens contienen toda la información necesaria para la autenticación, lo que reduce la necesidad de almacenamiento del lado del servidor.
2. Puede contener datos adicionales más allá de la autenticación, como roles de usuario.

#### Contras

1. Requiere un esfuerzo adicional para gestionar el ciclo de vida del token, incluida la expiración y la revocación.
2. Vulnerable al robo de tokens si no está protegido adecuadamente (por ejemplo, a través de HTTPS)

### Local Storage

Los tokens de sesión también se pueden almacenar en el Local Storage del cliente, un mecanismo para almacenar datos de forma persistente en el lado del cliente más allá de la duración de una sesión.

#### Ventajas

1. Proporciona una mayor capacidad de almacenamiento en comparación con las cookies.
2. Accesible a través de API de JavaScript, lo que permite una mayor flexibilidad en el manejo de datos de sesión.

#### Contras

1. No se envía automáticamente con cada solicitud como las cookies, sino que requiere su inclusión manual en las solicitudes.
2. Vulnerable a ataques XSS si no se protege adecuadamente.

### Session Storage

De manera similar al almacenamiento local, los tokens de sesión se pueden almacenar en el almacenamiento de sesión, un mecanismo de almacenamiento web que almacena datos solo mientras dura la sesión del navegador.

#### Ventajas

1. Se borra automáticamente cuando finaliza la sesión del navegador, lo que mejora la seguridad.
2. Accesible a través de API de JavaScript para almacenamiento temporal de datos.

#### Contras

1. Limitado a la duración de la sesión del navegador, requiriendo nueva autenticación después de la expiración de la sesión.
2. No se envía automáticamente con cada solicitud como las cookies.
