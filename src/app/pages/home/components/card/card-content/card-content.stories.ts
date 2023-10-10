import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardContentComponent } from './card-content.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<CardContentComponent> = {
  title: 'pages/home/components/card/card-content/CardContentComponent',
  component: CardContentComponent,
  args:{
    isLoading:false,
    error:false,
    percent:"0,5",
    created_date:"08:05:01"
  },
  decorators:[
    componentWrapperDecorator((story) =>
    `
    <div style="
    padding:3rem 0;
    ">
      ${story}
    </div>
    `
  ),
  moduleMetadata({
    declarations: [
      ErrorMessageComponent,
      LoaderComponent,
    ],
  }),
]
};

export default meta;
type Story = StoryObj<CardContentComponent>;

export const Default: Story = {
};

export const Loading: Story = {
  args:{
    isLoading:true
  }
};

export const WithErros: Story = {
  play:async({canvasElement})=>{
    const canvas = within(canvasElement);
    const restartButton = canvas.getByRole('button');
    await userEvent.click(restartButton);
  },
  args:{
    error:true
  }
};

export const LessThanEqual1: Story = {
  args:{
    currency:"0,95",
    textColor:"text-red",
  }
};

export const GreatherThan1LessThanEqual5: Story = {
  args:{
    currency:"3,35",
    textColor:"text-green",
  }
};

export const GreatherThan5: Story = {
  args:{
    currency:"5,56",
    textColor:"text-blue",
  }
};
