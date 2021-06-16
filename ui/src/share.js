import React from 'react'
import {
  ShowContextProvider,
  useShowContext,
  useShowController,
  useGetMany,
} from 'react-admin'

const ShareShowLayout = (props) => {
  const { loading, ...context } = useShowContext(props)
  const { record } = context
  const ids = record.resourceIds.split(',')
  const { data, _, error } = useGetMany(record.resourceType, ids);

  // To test
  return (
    <>
    {ids}
      {data.map(data => (
        <p>{data.id}</p>
      ))}
    </>
  )
}

const ShareShow = (props) => {
  const controllerProps = useShowController(props)
  return (
    <ShowContextProvider value={controllerProps}>
      <ShareShowLayout {...props} {...controllerProps} />
    </ShowContextProvider>
  )
}

export default {
  show: ShareShow,
}
