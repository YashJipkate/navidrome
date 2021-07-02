import React from 'react'
import {
  ShowContextProvider,
  useShowContext,
  useRecordContext,
  useShowController,
  useGetMany,
} from 'react-admin'
import { List, Datagrid, TextField, BooleanField } from 'react-admin';
import { Show, SimpleShowLayout, DateField, RichTextField } from 'react-admin';
const ShareShowLayout = (props) => {
  const { loading, ...context } = useShowContext(props)
  const { record } = context
  console.log(record, ' ', loading)
  const ids = loading ? null : record.resourceIds.split(',')
  const { data } = useGetMany(record.resourceType, ids)

  // console.log("here")
  // // To test
  return (
    <>
      {data && data.map(data => (
        <p>{data.id}</p>
      ))}
    </>
  )
}

const ShareShow = (props) => {
  const controllerProps = useShowController(props)
  // console.log(controllerProps, props)
  return (
    <ShowContextProvider value={controllerProps}>
      <ShareShowLayout {...props} {...controllerProps} />
    </ShowContextProvider>
  )
}

// const ShareShow = (props) => {
//   console.log(props)
//   return (
//   <Show {...props}>
//       <SimpleShowLayout>
//           <TextField source="id" />
//           <TextField source="description" />
//       </SimpleShowLayout>
//   </Show>
// )};

const ShareList = (props) => (
  <List {...props}>
  <Datagrid>
      <TextField source="id" />
  </Datagrid>
</List>
)

export default {
  show: ShareShow,
  // list: ShareList,
}
