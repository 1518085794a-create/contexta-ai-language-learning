/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class ViewSummary extends HTMLElement {
  constructor() {
    super();
    this._result = null;
  }

  set mode(value) {
    this._mode = value;
  }

  set language(value) {
    this._language = value;
  }

  set mission(value) {
    this._mission = value;
  }

  set result(value) {
    this._result = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  render() {
    if (!this._result) return;

    const result = this._result;
    const incomplete = result.incomplete === true;

    const notes = Array.isArray(result.notes)
      ? result.notes.filter(note => typeof note === "string" && note.trim())
      : [];

    const score = result.score == null ? null : String(result.score);
    const showScore =
      !incomplete &&
      this._mode !== "immergo_teacher" &&
      ["1", "2", "3"].includes(score);

    const title = incomplete ? "Practice Ended" : "Mission Completed";
    const subtitle = incomplete
      ? "Your practice session has ended. The mission objectives have not been confirmed as complete."
      : "You've completed your speaking mission. Review your learning feedback below.";

    const feedbackHTML = notes.length
      ? `<ol style="padding-left: 24px; line-height: 1.9; margin: 12px 0 0;">
          ${notes.map(note => `<li>${this.escapeHTML(note)}</li>`).join("")}
        </ol>`
      : `<p style="color: var(--color-text-sub); line-height: 1.7;">
          ${incomplete
            ? "No AI learning feedback is available for this unfinished session."
            : "No specific learning feedback was returned for this session."}
        </p>`;

    const language = this.escapeHTML(this._language || "Not specified");

    const mode = this._mode === "immergo_teacher"
      ? "Teacher Mode"
      : this._mode === "immergo_immersive"
        ? "Immersive Mode"
        : "Not specified";

    const scenario = this.escapeHTML(
      this._mission?.title || "Not specified"
    );

    const sessionDetails = `
      <div class="card" style="text-align: left; margin: 20px 0; padding: 20px;">
        <h3 style="margin: 0 0 14px;">Practice Details</h3>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Scenario:</strong> ${scenario}</p>
      </div>
    `;

    const scoreHTML = showScore
      ? `<div class="card" style="text-align: left; margin-top: 20px;">
          <h3>Speaking Performance</h3>
          ${this._renderScore(score)}
        </div>`
      : "";

    this.innerHTML = `
      <div class="container" style="
        max-width: 760px;
        margin: 0 auto;
        padding: 36px 20px 56px;
        text-align: left;
      ">
        <div style="text-align: center; margin-bottom: 28px;">
          <p style="
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent-primary);
            font-weight: 800;
            font-size: 0.85rem;
          ">CONTEXTA · LEARNING SUMMARY</p>

          <h2 style="margin: 16px 0; color: var(--color-text-main);">
            ${title}
          </h2>
          ${sessionDetails}

          <p style="
            max-width: 560px;
            margin: 0 auto;
            color: var(--color-text-sub);
            line-height: 1.7;
          ">${subtitle}</p>
        </div>

        <div class="card" style="text-align: left; padding: 24px;">
          <h3 style="margin-top: 0;">Today's Learning Takeaways</h3>
          ${feedbackHTML}
        </div>

        ${scoreHTML}

        <div style="
          margin-top: 24px;
          padding: 18px 20px;
          border: 1px solid var(--color-accent-primary);
          border-radius: var(--radius-lg);
          color: var(--color-text-sub);
          line-height: 1.7;
        ">
          <strong style="color: var(--color-text-main);">Keep Practicing</strong>
          <p style="margin: 8px 0 0;">
            Regular short conversations can help you build confidence.
            Choose another scenario whenever you're ready.
          </p>
        </div>

        <button id="home-btn" class="btn-primary" style="
          display: block;
          width: 100%;
          margin-top: 28px;
          padding: 20px;
          border-radius: var(--radius-lg);
          background: var(--color-accent-primary);
          color: white;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
        ">Back to Mission List</button>
      </div>
    `;

    this.querySelector("#home-btn").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("navigate", {
        bubbles: true,
        detail: { view: "missions", mission: null, result: null }
      }));
    });
  }

  _renderScore(score) {
    const levels = {
      "1": { title: "Tiro", description: "Needed frequent assistance" },
      "2": { title: "Proficiens", description: "Communicated with some assistance" },
      "3": { title: "Peritus", description: "Communicated fluently" }
    };

    const level = levels[score];

    if (!level) return "";

    return `
      <p style="font-size: 1.3rem; font-weight: 800; margin: 12px 0 6px;">
        ${level.title}
      </p>
      <p style="color: var(--color-text-sub); margin: 0;">
        ${level.description}
      </p>
    `;
  }
}

customElements.define("view-summary", ViewSummary);
