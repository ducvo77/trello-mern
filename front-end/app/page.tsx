import BoxColumnList from './components/Board/BoxColumnList'
import { MOCK_DATA } from '@/app/apis/mock-data'
import { mapOrder } from '@/app/utils/sorts'

export default function Home() {
  const orderedColumns = mapOrder(
    MOCK_DATA.board.columns,
    MOCK_DATA.board.columnOrderIds,
    '_id'
  )

  return <BoxColumnList columns={orderedColumns} />
}
