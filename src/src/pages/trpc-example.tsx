import { useCallback, useState } from 'react'
import { trpc } from '@/utils/trpc'

const TrpcExample = () => {
  const [itemName, setItemName] = useState<string>('')

  const { data: list, refetch } = trpc.useQuery(['findAll'])
  const insertMutation = trpc.useMutation(['insertOne'], {
    onSuccess: () => refetch(),
  })

  const deleteAllMutation = trpc.useMutation(['deleteAll'], {
    onSuccess: () => refetch(),
  })

  const updateOneMutation = trpc.useMutation(['updateOne'], {
    onSuccess: () => refetch(),
  })

  const insertOne = useCallback(() => {
    if (itemName === '') return

    insertMutation.mutate({
      title: itemName,
    })

    setItemName('')
  }, [itemName, insertMutation])

  const clearAll = useCallback(() => {
    if (list?.length) {
      deleteAllMutation.mutate({
        ids: list.map((item) => item.id),
      })
    }
  }, [list, deleteAllMutation])

  const updateOne = useCallback(
    (item) => {
      updateOneMutation.mutate({
        ...item,
        checked: !item.checked,
      })
    },
    [updateOneMutation],
  )

  return <div></div>
}

export default TrpcExample
