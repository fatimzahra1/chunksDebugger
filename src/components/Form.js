import React, {useState} from 'react'


function Form(props) {
    const [text, setText] = useState('')

    const onchange = (e) => setText(e.target.value)
    const submit = () => props.calculateIndex(text)

  return (
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" value={text} onChange={onchange}></textarea>
          <label for="textarea1">Write The chunks here and i will tell you where is the first false closure </label>
        </div>
      </div>
      <a  class="waves-effect waves-light btn" onClick={submit}>submit</a>
    </form>
  </div>
  )
}

export default Form