import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DolarCanadenseCardComponent } from 'src/app/pages/home/features/dolar-canadense/components/dolar-canadense-card/dolar-canadense-card.component';
import { LibraEsterlinaCardComponent } from 'src/app/pages/home/features/libra-esterlina/components/libra-esterlina-card/libra-esterlina-card.component';
import { CurrencyListComponent } from './currency-list.component';
import { DolarCanadenseService } from '../../features/dolar-canadense/services/dolar-canadense.service';
import { LibraEsterlinaService } from '../../features/libra-esterlina/services/libra-esterlina.service';
import { PesoArgentinoService } from '../../features/peso-argentino/services/peso-argentino.service';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CurrencyListComponent> = {
  title: 'pages/home/components/currency-list/CurrencyListComponent',
  component: CurrencyListComponent,
  decorators:[
    componentWrapperDecorator((story) =>
    `
    <div style="
    padding:3rem 0;
    display:flex;
    align-items:center;
    justify-content:center
    ">
      <div style="position:relative; width:100%">
      ${story}
      </div>
    </div>
    `
  ),
  moduleMetadata({
    declarations: [
      DolarCanadenseCardComponent,
      LibraEsterlinaCardComponent,
      DolarCanadenseCardComponent,
    ],
    providers:[DolarCanadenseService, LibraEsterlinaService, PesoArgentinoService]
  }),
]
};

export default meta;
type Story = StoryObj<CurrencyListComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {};
