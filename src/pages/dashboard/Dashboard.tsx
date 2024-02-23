import { ListToolBar } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts/BaseLayout';

export default function Dashboard() {
  return (
    <BaseLayout
      title='Página Inicial'
      toolBar={
        <ListToolBar
          showSearchBar
          showBtn
        />
      }
    >
      Testando
    </BaseLayout>
  );
}
