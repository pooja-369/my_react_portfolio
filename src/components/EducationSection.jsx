import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function EducationSection() {
  return (
    <div className='text-white md:pt-10 pt-6' id='EducationSection'>

    <div className='py-10'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Education</div>
      <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
    </div>

<VerticalTimeline>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)'  }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
 
 
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>


    </div>
  )
}

export default EducationSection