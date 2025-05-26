import React from "react";
import BlogLayout from '../components/BlogLayout';
import BlogPost from '../components/BlogPost';


function Blogs () {
    const posts = [
        {
          title: "Good Research-Right Job!",
          content: [
            "I interact with lots of the candidates who apply for various job openings available in the industry for the freshers. They might be undoubtedly skilled enough to crack the interviews, however most of them lose the same out of ignorance about the job role they are applying for! We Indians spend hours on Netflix, and I am not sure why we don't get the time to prepare for an interview.",
            "As for a recruiter, it is necessary to understand the core skills, and requisites of the job openings, else we will never be able to recruit the desired talent. An applicant must study the minute details about the job role they are applying for. We can't lay down any excuses for the ignorance about the requisites for a specific role amidst the vast pool of information available online.",
            "And if someone is not able to drag that information from online sources, they may directly ask the recruiting person to explain to him the job role before appearing in the interview.It is the responsibility of the hiring team to clarify the requirements to the candidates so that they may prepare for the interview accordingly and if you are presenting yourself in an interview without the thorough understanding of the roles and responsibilities, you have lost the game without participating in it.",
            "Stay tuned for more insights."
          ]
        },
        {
          title: "How to Apply for a Job?",
          content: [
            "You might be getting rejection emails for your job applications with a unique pattern. You can assume that these are the recruiters who are sending you the same, and you may ignore to work out the reasons for resume rejection. Let me tell you clearly, these are mostly the automated responses set on job portals, for the candidates who do not meet the eligibility criteria for the hot vacancy.",
            "You may simply get irritated with this rejection email despite having required skills, and experience. But the actual reason is in your resume, where you missed to mention the specific details about your profile. I will explain with an example. Imagine you are from Delhi, and have another home at Jaipur also. You apply for a job in Jaipur, as…"
          ]
        },
        {
          title: "How to Gain Authority on Spoken English?",
          content: [
            "Are you in a Group of English speaking people?",
            "If not, you are missing the possibility to upgrade your verbal communication. I have seen lots of Indian professionals having excellent authority in their core field. Yet they somehow avoid adapting good communication skills.They generally stay in a false idea, or you can understand it as the common mindset of an average Indian as why we with our native language as Hindi need to acquire authority on English. This is the most disastrous misconception depriving the best talent pool of India from entering into the wider scopes of career.",
            "Do you know what you miss if you are still lacking ownership in verbal communication?",
            "- Chances to join good MNCs, and top companies of India where the mode of interview is core English. Chances to upgrade your professional skills through multiple courses available in the market , which are definitely in English.Chances to explore job options abroad, or to settle abroad. Opportunities to Speak confidently in meetings, group discussions, seminars, or training sessions organised in your office, or outside the office. Opportunities to interact directly with the clients of the company, whether or not you are in client coordination.",
            "I can count hundreds of such scenarios which you might be losing due to lack of confidence in English speaking.",
            "So, what is the solution?",
            "Spend at least 1 hour daily with the group of English speaking people. Watch corporate shows organized on global levels, and follow the discussions with focus, studying the captions. Never miss a chance to communicate in English with the people on social media platforms. Do self assessment by yourself by reading aloud some good content from Newspapers, Magazines, or from Online Sources. Communicate with your family, especially with the students, and other professionals in your family in English as much as possible. There is a wide scope for upgrading verbal skills, provided we know how to utilize the available resources."
          ]
        },
        {
          title: "From Frustration to Selection: Mastering Mindfulness in Interviews",
          content: [
            "The biggest mistakes candidates make out of frustration with their last organisations is that they start venting out all the negative things that have happened to them in their previous job roles."
          ]
        },

        ,
        {
          title: "Interviews Are The Ultrasounds Of Your Actual Personality!",
          content: [
            "It is fine to share the personal experiences with the recruiter/HR during initial screening, as generally every HR holds that touch of emotions to understand and counsel about your situation. But narrating the samse negative experience during the overall screening process might be considered as your drawback, and you may lose the opportunity.", 
            "I am not just mentioning out of assumptions, but I have interacted with lots of the applicants who lost their professional accent, and went too personal in explaining the reason of their relieving from the last organisation. We all know our strengths, and weaknesses. We are always aware about the experiences that may trigger us, and we may divert from the normal flow of a healthy interaction.",
            "Isn't this the biggest blunder some applicants can do to himself by showing all the negative stuff he has with him? You have already taken the decision to switch the company, the best thing you can do to get rid of all the negative memories, or you might have spent lots of happy moments in your workplace too. Why not to share those? ",
            "We are human beings and it is our inborn nature to judge others, no matter how neutral we sound. Your interviewers will definitely notice your weakness, and will try to explore more about that experience and its reasons. ",
            "The interviewer may or may not trust your reasons, and may think about the other side of the coin. It is important to stay mindful, and positive during an interview, and keep watch on your responses. Do not just throw your answers as they are arising in your gut!s"
          ]
        }
      ];
    
      return (
        <BlogLayout>
          {posts.map((post, index) => (
            <BlogPost key={index} title={post.title} content={post.content} />
          ))}
        </BlogLayout>
      );
}

export default Blogs;
