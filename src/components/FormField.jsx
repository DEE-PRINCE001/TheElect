import React from 'react'

export const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  otherStyles = ''
}) => {
  return (
    <div className={otherStyles}>
      {label && (
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
          {label} {required && <span className="text-secondary">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-gray-100 border ${
          error ? 'border-red-500' : 'border-transparent'
        } focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
  otherStyles = ''
}) => {
  return (
    <div className={otherStyles}>
      {label && (
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
          {label} {required && <span className="text-secondary">*</span>}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-gray-100 border ${
          error ? 'border-red-500' : 'border-transparent'
        } focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm text-gray-700 appearance-none`}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={typeof opt === 'string' ? opt : opt.value}>
            {typeof opt === 'string' ? opt : opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  error,
  otherStyles = ''
}) => {
  return (
    <div className={otherStyles}>
      {label && (
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
          {label} {required && <span className="text-secondary">*</span>}
        </label>
      )}
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-gray-100 border ${
          error ? 'border-red-500' : 'border-transparent'
        } focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm resize-none`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
