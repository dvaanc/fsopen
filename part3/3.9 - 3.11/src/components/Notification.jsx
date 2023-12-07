const Notification = ({ errorMessage, successMessage, type }) => {
  if(type === null) return null

  return (
    <div className={type}>
      {type === 'success' ? successMessage : errorMessage}
    </div>
  )
}

export default Notification