import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'pages/home/components/card/CardComponent',
  component: CardComponent,
  render: (args) => {
    const { ...props } = args; 
    return {
      props,
      template: `
        <app-card>
          Content Here...
        </app-card>
      `
    }; 
  }, 
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
type Story = StoryObj<CardComponent>;

export const Default: Story = {};
