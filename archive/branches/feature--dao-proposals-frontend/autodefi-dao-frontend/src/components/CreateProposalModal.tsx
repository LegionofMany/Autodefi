import { icons } from '../assets';
import { Icon } from './Icon';

interface CreateProposalModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateProposalModal({ open, onClose }: CreateProposalModalProps) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="create-modal" role="dialog" aria-modal="true" aria-labelledby="create-proposal-heading">
        <header className="modal-header">
          <div>
            <h2 id="create-proposal-heading">Create Proposal</h2>
            <p>Submit a DAO proposal for AutoDeFi governance review.</p>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close proposal modal"><Icon src={icons.cross} /></button>
        </header>

        <form className="proposal-form">
          <label>Proposal Title<input placeholder="Example: Increase Dealer Funding Reserve" /></label>
          <div className="form-grid">
            <label>Category<select defaultValue="Treasury"><option>Treasury</option><option>Lending Pool</option><option>Risk</option><option>Insurance Fund</option><option>Staking</option><option>Recovery</option><option>Dealer Network</option></select></label>
            <label>Proposal Type<select defaultValue="Parameter Change"><option>Parameter Change</option><option>Treasury Allocation</option><option>Smart Contract Upgrade</option><option>Risk Policy Update</option><option>DAO Operations</option></select></label>
          </div>
          <label>Description<textarea rows={5} placeholder="Explain the requested change, why it matters, and how it affects borrowers, dealers, lenders, stakers, treasury, and risk." /></label>
          <div className="form-grid">
            <label>Voting Duration<select defaultValue="7 Days"><option>3 Days</option><option>7 Days</option><option>14 Days</option></select></label>
            <label>Execution Target<input placeholder="Contract, treasury action, or policy update" /></label>
          </div>
          <label>Supporting Documents<input placeholder="IPFS CID, document link, audit reference, or governance file" /></label>
          <footer className="modal-actions">
            <button type="button" className="outline-button" onClick={onClose}>Cancel</button>
            <button type="button" className="create-button"><Icon src={icons.plus} /> Submit Proposal</button>
          </footer>
        </form>
      </section>
    </div>
  );
}
