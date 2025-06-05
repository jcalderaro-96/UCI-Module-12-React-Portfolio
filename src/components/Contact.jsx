// src/components/Contact.jsx
import { useState } from 'react'                            // import useState for form state

function Contact() {
  const [formData, setFormData] = useState({               // track form inputs
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({                    // track form errors
    name: '',
    email: '',
    message: '',
  })

  // Simple validation function
  function validate() {
    const newErrors = { name: '', email: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'                   // name required
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'                 // email required
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'                  // email format check
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'             // message required
      isValid = false
    }

    setErrors(newErrors)                                     // update errors state
    return isValid
  }

  function handleChange(e) {                                 // update form data on input change
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {                                        // only proceed if valid
      alert('Form submitted (not really)')                  // placeholder submit action
      setFormData({ name: '', email: '', message: '' })     // reset form
      setErrors({ name: '', email: '', message: '' })       // reset errors
    }
  }

  return (
    <section>
      <h2>Contact</h2>                                      {/* Section title */}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}                            // bind input to state
            onChange={handleChange}                          // update state on change
            onBlur={validate}                                // validate on blur
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}  {/* show name error */}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validate}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>} {/* show email error */}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={validate}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>} {/* show message error */}
        </div>

        <button type="submit">Send</button>                   {/* submit button */}
      </form>

      <p>Email: your.email@example.com</p>                    {/* fallback contact info */}
      <p>Phone: (123) 456-7890</p>
    </section>
  )
}

export default Contact                                      // export Contact component

// end of file
