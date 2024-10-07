import React, { Suspense } from 'react'

const PagesLazyLoader = (Component) => {
  return (
    <Suspense fallback={<div>page loading...</div>}>
        <Component/>
    </Suspense>
  )
}

export default PagesLazyLoader
