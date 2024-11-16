# Calculadora de Propinas

## Descripción
La **Calculadora de Propinas** es una aplicación web desarrollada en React y TypeScript, optimizada con **Vite**. Esta herramienta facilita el cálculo de propinas. Los usuarios pueden agregar elementos al pedido, seleccionar el porcentaje de propina y visualizar el total a pagar.

## Características
- **Selección de Propina**: Elige entre porcentajes predefinidos (10%, 20%, 50%) o ajusta el porcentaje manualmente.
- **Cálculo de Totales**: Muestra el subtotal, el valor de la propina y el total general.
- **Gestión de Pedido**: Agrega o elimina elementos de tu pedido fácilmente.
- **Reinicio de Pedido**: Un botón permite reiniciar el pedido y la selección de propina.

## Instalación:
Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### 1. Clonar el repositorio:
```bash
git clone https://github.com/anabartos/Calculadora-Propinas-React-TS.git
cd Calculadora-Propinas-React-TS
```
### 2. Instalar las dependencias:
```bash
npm install
```
### 3.Ejecutar el servidor de desarrollo:
Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```
## Tecnologías Utilizadas
- **Vite**: Herramienta de desarrollo rápida para proyectos en React y TypeScript.
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Mejora la calidad del código mediante tipado estático.
- **Tailwind CSS**: Proporciona estilos rápidos y responsivos.

## Componentes Principales
- **MenuItem**: Representa un elemento del menú, mostrando su nombre y precio, y permite agregarlo al pedido.
- **OrderContents**: Muestra el contenido actual del pedido y permite eliminar elementos.
- **OrderTotals**: Calcula y presenta el subtotal, la propina y el total a pagar.
- **TipPercentageForm**: Facilita la selección del porcentaje de propina a través de opciones de radio.
- **useOrder Hook**: Maneja el estado del pedido, incluyendo agregar, eliminar y restablecer elementos, así como el porcentaje de propina.

## Acceso a la Aplicación
La aplicación está desplegada en Netlify y se puede acceder en el siguiente enlace:

[Calculadora de Propinas en Netlify](https://calculadora-propinas-app.netlify.app)

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, no dudes en abrir un *issue* o enviar un *pull request*.


