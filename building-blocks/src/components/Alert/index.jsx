import './style.css';

const Alert = ({type, title, message}) => {
  const getIconClass = (type) => {
    switch(type) {
      case 'default': return 'fa-bell';
      case 'success': return 'fa-check-circle';
      case 'warning': return 'fa-exclamation-circle';
    }
  }
  return (
    <div className={`alert-container alert-container-${type}`}>
      <div className='alert-header'>
        <i className={`fa ${getIconClass(type)}`}></i>
        <span>{title}</span>
      </div>
      {message}
    </div>
  )
}

export default Alert;