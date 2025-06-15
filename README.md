# Aprendizaje de React

### Carpeta 01-intro-react

Contiene un proyecto básico de React que incluye un archivo principal (`index.html`) donde se muestra cómo crear y renderizar componentes utilizando JSX. Es ideal para quienes están comenzando a aprender los conceptos fundamentales de React.

#### JSX
JSX = JS + XML

#### Babel
Es un transpilador que convierte código JavaScript moderno (incluyendo JSX) en una versión compatible con navegadores web más antiguos.

---

### Carpeta 02-intro-javascript

#### Vite
Vite es una herramienta de desarrollo que permite crear proyectos web modernos de manera rápida. Proporciona un servidor de desarrollo ultra rápido y una configuración optimizada para construir aplicaciones con frameworks como React, Vue o Svelte, utilizando módulos ES (ECMAScript, es decir, JavaScript moderno) y permitiendo que los cambios en el código se reflejen al instante en el navegador sin recargar la página completa (recarga en caliente o Hot Reload).


#### Scope en JavaScript

El **scope** (ámbito) en JavaScript define el contexto en el que las variables y funciones son accesibles. Es decir, determina dónde puedes usar o modificar una variable dentro del código.

#### Importancia:
- **Evita conflictos de nombres:** Permite declarar variables con el mismo nombre en diferentes partes del programa sin que interfieran entre sí.
- **Controla la visibilidad:** Protege datos y funciones para que solo sean accesibles donde realmente se necesitan.
- **Mejora la organización:** Facilita la estructuración del código, haciéndolo más legible y mantenible.

En JavaScript existen principalmente dos tipos de scope:  
- **Scope global:** Variables accesibles desde cualquier parte del código.
- **Scope local:** Variables accesibles solo dentro de una función o bloque donde fueron declaradas (por ejemplo, usando `let` o `const` dentro de un bloque `{}`).
 
#### var No se recomienda usar var porque:

- No respeta el scope de bloque: Las variables declaradas con var son accesibles fuera del bloque donde se declaran, lo que puede causar errores inesperados.
- Puede sobrescribir variables fácilmente: Permite redeclarar la misma variable en el mismo scope.
- Hoisting: Las variables var se elevan al inicio del scope, lo que puede llevar a comportamientos confusos.


#### Métodos de consola mas usados en JavaScript

- console.log(): Muestra mensajes generales.
- console.error(): Muestra mensajes de error.
- console.warn(): Muestra advertencias.
- console.info(): Muestra información.
- console.table(): Muestra datos en formato de tabla.
- console.dir(): Muestra una representación interactiva de un objeto.
- console.group() / console.groupEnd(): Agrupa mensajes en la consola.
- console.time() / console.timeEnd(): Mide el tiempo de ejecución de un bloque de código.

#### Operador Spread (`...`)

El operador **spread** (`...`) permite copiar las propiedades de un objeto o los elementos de un arreglo en otro objeto o arreglo.  
Por ejemplo:

```js
const persona2 = { ...persona };
```

##### ¿Por qué usar spread?
- Permite crear copias superficiales de objetos o arreglos de manera sencilla.
- Facilita la combinación y actualización de objetos sin modificar el original (inmutabilidad).

##### ¿Por qué no asignar directamente un objeto a otro?
Si haces esto:

```js
const persona2 = persona;
```

Ambas variables apuntan al mismo objeto en memoria. Si modificas `persona2`, también se modifica `persona`, lo que puede causar errores difíciles de detectar.  
Por eso, es mejor usar el operador spread para crear una copia independiente.


##### Formas de exportar e importar 
```
# 1 
export const heroes = [];
# use
import { heroes } from './data/heroes';

# 2
export default [];
# use
import heroes from './data/heroes';

# 3 recommended option
const heroes = [];
export default heroes;
# use
import heroes from './data/heroes';

# 4 
const heroes = [];
export const owners = [];
export default heroes;
# use
import heroes, { owners } from './data/heroes';

# 5 
const heroes = [];
const owners = [];
export {
    heroes,
    owners
};
# use
import { heroes, owners } from './data/heroes';

<!-- 
#alternative 
const heroes = [];
const owners = [];
export {
        heroes as default,
        owners
    }; 
# use 
import heroes, { owners } from './data/heroes'; 
-->
```

#### Promesas

[Doc de Promise en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Buenas Practicas 

- Componentes y functional components en **Upper Camel Case**
- Para valores estáticos se recomienda declararlos fuera de los functional component
