# Módulo 2 - Paquete de funcionalidades (NativeScript + Angular)

Incluye:
- Página de **búsqueda** con `ListView` y **plantilla anidada con `FlexboxLayout`**.
- **Navegación** de listado → detalle con `RouterExtensions.navigate()`.
- **Pull to refresh** (plugin community) que agrega ítems aleatorios.
- Botón **Categoría** que abre **diálogo `action()`** y actualiza el objeto.
- **Toast** para notificaciones.
- **Two-way binding** `[(ngModel)]` en el formulario de búsqueda.
- **Validador personalizado** (`appMinlen`) como Directiva de Angular.
- **Detección de gestos** (`doubleTap`) y **animación** de un icono.
- **Splash screen Android** personalizado.

## Integración
1) Copia `src/` sobre tu `src/` y `App_Resources/` sobre el tuyo.
2) Instala dependencias (ver `integrations/plugins-and-deps.txt`).
3) En `app.module.ts` importa una sola vez: `import './plugins-setup';`
4) Agrega la ruta lazy de `/search` (ver `integrations/app-routing-add-search.txt`).
5) Agrega el item al Drawer en `src/app/modulo1` (ver `modulo1-drawer-search.txt`).

## Splash Android
Se incluye `App_Resources/Android/src/main/res/drawable-nodpi/splash_screen.xml` con color e imagen `ic_search.png`. 
