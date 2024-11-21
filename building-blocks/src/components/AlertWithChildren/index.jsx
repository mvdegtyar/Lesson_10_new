import './style.css';

const AlertWithChildren = ({type, title, children}) => {
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
      {children}
    </div>
  )
}

export default AlertWithChildren;