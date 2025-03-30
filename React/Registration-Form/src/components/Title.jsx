function Title({ text, colour }) {
  return (
    <h1
      className={`text-${colour}`}
    >
      {!text ? 'Title' : text}
    </h1>
  )
}

export default Title