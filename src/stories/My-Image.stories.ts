import { MyImageComponent } from './../app/my-image/my-image.component';

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
});

export const Image1BlackAndWhite = () => ({
  component: MyImageComponent,
  props: {
    url: 'https://www.kron4.com/wp-content/uploads/sites/11/2020/08/Yosemite_1481908293344_14069714_ver1.0.png?w=1280&h=720&crop=1',
    alt: 'Yosemite',
    style: {
      filter: 'grayscale(100%)'
    }
  },
});