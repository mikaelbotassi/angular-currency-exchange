import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { rest } from 'msw';
import { DolarCanadenseCardComponent } from 'src/app/pages/home/features/dolar-canadense/components/dolar-canadense-card/dolar-canadense-card.component';
import { DolarCanadenseService } from '../../services/dolar-canadense.service';
import { HttpClientModule } from '@angular/common/http';
import { QuoteApiService } from 'src/app/pages/home/services/quote-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/pages/home/components/card/card.component';
import { CardContentComponent } from 'src/app/pages/home/components/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/pages/home/components/card/card-header/card-header.component';
import { Quote } from 'src/app/pages/home/models/Quote';

const mockData = [new Quote("Dólar Canadense")];

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DolarCanadenseCardComponent> = {
  title: 'pages/home/features/dolar-canadense/components/DolarCanadenseCardComponent',
  component: DolarCanadenseCardComponent,
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
    imports: [HttpClientModule, SharedModule],
    declarations: [
      CardComponent,
      CardContentComponent,
      CardHeaderComponent,
    ],
    providers: [QuoteApiService,DolarCanadenseService]
  }),
]
};

export default meta;
type Story = StoryObj<DolarCanadenseCardComponent>;

export const Success: Story = {
  parameters: {
    msw: [
      rest.get('https://economia.awesomeapi.com.br/CAD', (req, res, ctx) => {
        return res(
          ctx.json(mockData)
        )
      }),
    ],
  },
};
