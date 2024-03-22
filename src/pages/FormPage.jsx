import React,{useState} from 'react'
import FormComponent from '../components/FormComponent'

function Form() {
  const [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 500);
  return (
    <div>
      <FormComponent loading={loading} />
    </div>
  )
}

export default Form
