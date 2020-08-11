import { MyButtonComponent } from '../app/my-button/my-button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text } from '@storybook/addon-knobs';


export default {
  title: 'My Button',
  decorators: [withKnobs],
  component: MyButtonComponent,
};

export const Button1 = () => ({
  component: MyButtonComponent,
  props: {
    label: text('label', 'Button with text'),
    style: object('style', {
      width: '500px',
      borderRadius: '4px',
      padding: '10px 24px',
      backgroundColor: 'light-gray',
      border: '1px solid black',
      fontWeight: 'bold'
    })
  },
});

export const Button2 = () => ({
  component: MyButtonComponent,
  props: {
    label: text('label', 'Button 100%'),
    style: object('style', {
      width: '100%',
      borderRadius: '4px',
      padding: '10px 24px',
      marginTop: '100px',
      backgroundColor: 'light-gray',
      border: '1px solid black',
      fontWeight: 'bold'
    })
  },
});

export const Button3 = () => ({
  component: MyButtonComponent,
  props: {
    label: text('label', 'Button With Action'),
    style: object('style', {
      width: '50%',
      borderRadius: '4px',
      padding: '10px 24px',
      backgroundColor: '#FFFFFF',
      marginTop: '100px',
    }),
    onClickButton: action('This was clicked')
  },
});
