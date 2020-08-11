import { MyButtonComponent } from '../app/my-button/my-button.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'My Button',
  component: MyButtonComponent,
};

export const Button1 = () => ({
  component: MyButtonComponent,
  props: {
    label: 'Button with text',
    style: {
      width: '500px',
      borderRadius: '4px',
      padding: '10px 24px',
      backgroundColor: '#FFFFFF'
    }
  },
});

export const Button2 = () => ({
  component: MyButtonComponent,
  props: {
    label: 'Button 100%',
    style: {
      width: '100%',
      borderRadius: '4px',
      padding: '10px 24px',
      backgroundColor: '#FFFFFF',
      marginTop: '100px'
    }
  },
});

export const Button3 = () => ({
  component: MyButtonComponent,
  props: {
    label: 'Button With Action',
    style: {
      width: '50%',
      borderRadius: '4px',
      padding: '10px 24px',
      backgroundColor: '#FFFFFF',
      marginTop: '100px',
    },
    onClickButton: action('This was clicked')
  },
});
