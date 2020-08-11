# NgStorybook

1. Agregar Storybook a tu proyecto angular `npx -p @storybook/cli sb init`
2. Correr el storybook en localhost: `npm run storybook`
3. Crear un story file en `src/stories` para cada componente que se quiera visualizar
4. Ejemplo de `<component>.stories.ts`:
```typescript
export default {
  title: 'My Image',
  component: MyImageComponent
};

export const Image1 = () => ({
  component: MyImageComponent,
  props: {
    url: 'https://www.kron4.com/wp-content/uploads/sites/11/2020/08/Yosemite_1481908293344_14069714_ver1.0.png?w=1280&h=720&crop=1',
    alt: 'Yosemite'
  },
```
5. Important: when using nested components, you have to declare all dependencies (children) inside the story file. Ejemplo:
```typescript
export default {
  title: 'My Image Editor',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [MyImageComponent, MyButtonComponent, ImageEditorComponent],
      imports: [CommonModule],
    }),
  ],
};
```
6. `npm run build-storybook` antes de hacer deploy
