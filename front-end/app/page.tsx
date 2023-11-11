import BoxColumnList from './components/Board/BoxColumnList'
import { MOCK_DATA } from '@/app/apis/mock-data'

export default function Home() {
  return <BoxColumnList columns={MOCK_DATA.board.columns} />
}
