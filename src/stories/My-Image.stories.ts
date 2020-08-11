import { MyImageComponent } from './../app/my-image/my-image.component';
import { withKnobs, object, text } from '@storybook/addon-knobs';


export default {
  title: 'My Image',
  decorators: [withKnobs],
  component: MyImageComponent
};

export const Image1 = () => ({
  component: MyImageComponent,
  props: {
    url: text('url', 'https://www.kron4.com/wp-content/uploads/sites/11/2020/08/Yosemite_1481908293344_14069714_ver1.0.png?w=1280&h=720&crop=1'),
    alt: 'Yosemite'
  },
});

export const Image1BlackAndWhite = () => ({
  component: MyImageComponent,
  props: {
    url: text('url', 'https://www.kron4.com/wp-content/uploads/sites/11/2020/08/Yosemite_1481908293344_14069714_ver1.0.png?w=1280&h=720&crop=1'),
    alt: 'Yosemite',
    style: object('style', {
      filter: 'grayscale(100%)'
    })
  },
});

export const Image2 = () => ({
  component: MyImageComponent,
  props: {
    url: text('url', 'https://grandcanyon.com/wp-content/uploads/2019/12/gand-canyon-banner-2020.jpg'),
    alt: 'Grand Canyon'
  }
})