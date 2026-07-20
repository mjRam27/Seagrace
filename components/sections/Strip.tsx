export default function Strip() {
  const content = (
    <>
      Building Practical Engineering Experience <i>✦</i> Mentorship <i>✦</i> Collaboration <i>✦</i> Software Engineering <i>✦</i> Knowledge Sharing <i>✦</i> Industry Practices <i>✦</i>&nbsp;
    </>
  );
  return (
    <div className="strip">
      <div className="strip__track">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
