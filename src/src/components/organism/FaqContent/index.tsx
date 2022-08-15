import React from 'react'

export default function FaqContent() {
  return (
    <div className="accordion">
        <div className="accordion-item" id='question1'>
          <a className='accordion-link' href='#question1'>
            Bagaimana cara menambah mata kuliah?
          </a>
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel possimus iusto aperiam, rerum nam tenetur, voluptatibus pariatur nulla commodi autem, necessitatibus deserunt optio fugiat sequi atque itaque? Dolorum, rem explicabo!
            </p>
          </div>
        </div>
        <div className="accordion-item" id='question2'>
          <a className='accordion-link' href='#question2'>
            Bagaimana cara menambah mata kuliah?
          </a>
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel possimus iusto aperiam, rerum nam tenetur, voluptatibus pariatur nulla commodi autem, necessitatibus deserunt optio fugiat sequi atque itaque? Dolorum, rem explicabo!
            </p>
          </div>
        </div>
        <div className="accordion-item" id='question3'>
          <a className='accordion-link' href='#question3'>
            Bagaimana cara menambah mata kuliah?
          </a>
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel possimus iusto aperiam, rerum nam tenetur, voluptatibus pariatur nulla commodi autem, necessitatibus deserunt optio fugiat sequi atque itaque? Dolorum, rem explicabo!
            </p>
          </div>
        </div>
    </div>
  )
}