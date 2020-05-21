import React from "react"

export default function Forms(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange
      } = props

    return (
    <form 
        className="form container" 
        onSubmit={onSubmit}
    >
        <div className="form-group submit">
        <h3>Add A New User</h3>
        </div>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
        <div className="form-group inputs">
            <h4>General information</h4>

            <label>Name:&nbsp;
                <input
                type="text"
                placeholder="Type your name"
                maxLength="20"
                name="name"
                value={values.name}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <label>Email:&nbsp;
                <input
                type="text"
                placeholder="Type email"
                maxLength="25"
                name="email"
                value={values.email}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <label>Passwd:&nbsp;
                <input
                type="password"
                placeholder="Type password"
                maxLength="12"
                name="passwd"
                value={values.passwd}
                onChange={onInputChange}
                />
            </label>
            <br/>
            <label>Role:&nbsp;
                <select 
                    name="role" 
                    value={values.role} 
                    onChange={onInputChange}
                >
                    <option value="">Select a Role</option>
                    <option value="Product Engineer">Product Engineer</option>
                    <option value="Project Lead">Project Lead</option>
                    <option value="Back End Developer">Back End Developer</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                </select>
            </label>
            <br/>
            <label>tos
            <input
                type='checkbox'
                name='tos'
                checked={values.tos}
                onChange={onCheckboxChange}
            />
            </label>
            <br/>
            <button disabled={disabled}>submit</button>
        </div>
    </form>
    )
}
