import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
    let {categoryName} = useParams()
  return (
    <div>CategoryPage for { categoryName}</div>
  )
}
