import { Bell, FileText, Home, UserRound } from 'lucide-react'

const documents = [
  ['Driver License', 'Expires 04/14/2026', 'blue'],
  ['Medical Card', 'Expires 08/10/2025', 'green'],
  ['Insurance', 'Expires 03/10/2025', 'green'],
  ['Registration', 'Expires 09/11/2025', 'orange'],
]

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="CDL Wallet application preview">
      <div className="dot-field" />

      <div className="code-card code-card--left">
        <code>
          <span className="code-purple">const</span> App = () =&gt; {'{'}
          <br />
          &nbsp;&nbsp;<span className="code-purple">return</span> (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-orange">View</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-orange">Text</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CDL Wallet
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-orange">Text</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-orange">View</span>&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          {'}'}
        </code>
        <small>⚛ React Native</small>
      </div>

      <div className="phone">
        <div className="phone__speaker" />
        <div className="phone__status">
          <span>9:41</span>
          <span>▮▮ ◒</span>
        </div>
        <div className="phone__content">
          <h3>CDL Wallet</h3>
          <div className="phone__welcome">
            <span>Welcome back,</span>
            <strong>Shak</strong>
          </div>
          <div className="phone__label">Your Documents</div>
          <div className="document-list">
            {documents.map(([name, date, color]) => (
              <div className="document" key={name}>
                <span className={`document__icon ${color}`}>
                  <FileText size={13} />
                </span>
                <span>
                  <strong>{name}</strong>
                  <small>{date}</small>
                </span>
                <span>›</span>
              </div>
            ))}
          </div>
          <button className="phone__button">+ Add New Document</button>
        </div>
        <div className="phone__nav">
          <span className="active"><Home size={12} />Home</span>
          <span><FileText size={12} />Documents</span>
          <span><Bell size={12} />Scan</span>
          <span><UserRound size={12} />Profile</span>
        </div>
      </div>

      <div className="code-card code-card--right-top">
        <code>
          <span className="code-orange">@RestController</span>
          <br />
          <span className="code-purple">public class</span> DocumentController {'{'}
          <br />
          <br />
          &nbsp;&nbsp;<span className="code-blue">@GetMapping</span>(&quot;/api/documents&quot;)
          <br />
          &nbsp;&nbsp;<span className="code-purple">public</span> ResponseEntity...
          <br />
          {'}'}
        </code>
        <small>Java Spring Boot</small>
      </div>

      <div className="code-card code-card--right-bottom">
        <code>
          <span className="code-blue">SELECT</span> id, name, type
          <br />
          <span className="code-blue">FROM</span> documents
          <br />
          <span className="code-blue">WHERE</span> user_id = $1
          <br />
          <span className="code-blue">ORDER BY</span> expires_at;
        </code>
        <small>PostgreSQL</small>
      </div>
    </div>
  )
}
