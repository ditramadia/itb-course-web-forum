import React from 'react'

export default function HelpContent() {
  const steps = [
    '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec feugiat metus, non pretium velit. Vivamus finibus nibh non vestibulum auctor.',
    '2. Sed vulputate, quam in tempus porttitor, metus ligula placerat eros, eget pharetra ante purus et tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae dui ut mauris pellentesque sodales.',
    '3. Nunc iaculis egestas felis quis imperdiet. Fusce malesuada diam ac elementum feugiat.',
    '4. Duis pretium turpis felis, eu placerat augue sagittis nec.',
  ]

  return (
    <div className="help-container">
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  )
}
