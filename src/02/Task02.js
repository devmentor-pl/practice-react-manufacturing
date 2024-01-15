import React from 'react'
import ReactMarkdown from 'react-markdown'

const Task02 = () => {
  const [content, setContent] = React.useState('')

  React.useEffect(() => {
    fetch('CHANGELOG.md')
      .then((resp) => resp.text())
      .then((text) => setContent(text))
  }, [])

  return (
    <section>
      <h1>Task 02 - Branches and Changelog</h1>
      <ReactMarkdown children={content} />
    </section>
  )
}

export default Task02
