import React from 'react'
import axios from 'axios'

class FormLoginComponent extends React.Component {
   state = {
      username: '',
      password: '',
      isLoading: false,
      showPassword: false,
      submitted: false
   }

   handleChange = e => {
      const { name, value } = e.target
      this.setState({ [name]: value })
   }

   handleSubmit = e => {
      e.preventDefault()
      this.setState({ isLoading: true })
      const { username, password } = this.state
   }

   handleShowPassword = e => {
      e.preventDefault()
      const showPassword = !this.state.showPassword
      this.setState({ showPassword })
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <fieldset disabled={this.state.isLoading}>
               <div className="form-group">
                  <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange}/>
               </div>
               <div className="form-group">
                  <div className="input-group">
                     <input type={this.state.showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                     <div className="input-group-append">
                        <button className="btn btn-primary" onClick={this.handleShowPassword}><i className={`fas ${this.state.showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i></button>
                     </div>
                  </div>
               </div>
               <div className="form-group">
                  <button type="submit" className="btn btn-primary">{this.state.isLoading ? <i className="fas fa-spinner fa-spin"></i> :''} Login</button>
               </div>
            </fieldset>
         </form>
      )
   }
}

export default FormLoginComponent