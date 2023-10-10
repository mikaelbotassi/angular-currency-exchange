import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ErrorMessageComponent } from './error-message.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ErrorMessageComponent> = {
  title: 'pages/home/components/card/error-message/ErrorMessageComponent',
  component: ErrorMessageComponent,
  decorators:[
    componentWrapperDecorator((story) =>
    `
    <div style="
    padding:3rem 0;
    display:flex;
    align-items:center;
    justify-content:center
    ">
      ${story}
    </div>
    `
  ),
]
};

export default meta;
type Story = StoryObj<ErrorMessageComponent>;

export const Default: Story = {};
