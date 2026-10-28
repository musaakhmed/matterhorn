import Link from 'next/link';
import GuideLayout, {
  GuideChecklist,
  GuideFaq,
  GuideTable,
  GuideVerdict,
  GuideVerdictGrid,
  LiveConditionCallout,
} from '@/components/GuideLayout';
import { PLANNING_GUIDE_UPDATED, planningGuideMetadata } from '@/lib/planning-guides';
import { buildStaticGuideJsonLd } from '@/lib/schema';

export const revalidate = 900;

const PATH = '/guides/zurich-to-zermatt-day-trip-weather';
const TITLE =
  'Zurich or Geneva to Zermatt Day Trip: Is It Worth It Today? (Weather Decision Guide)';
const DESCRIPTION =
  'Deciding whether to take the 3.5-hour train from Zurich or Geneva to Zermatt? How to evaluate cloud forecasts before boarding, SBB train routing, and bad-weather backup plans.';

const FAQS = [
  {
    question: 'Is a day trip to Zermatt too rushed?',
    answer:
      'It is rushed, and it is still worth it when the morning score is 5/10 or higher. Zurich is about 3 hours 15 minutes each way, so the time in town is a summit ride and lunch, not a full hike. If the morning score is under 5/10, you spend about seven hours on trains without seeing the mountain. Postpone.',
  },
  {
    question: 'What train connection do I take from Zurich to Zermatt?',
    answer:
      'There is no direct train. Ride from Zurich HB toward Visp, change onto the Matterhorn Gotthard Bahn, and stay on that train into Zermatt. A sample morning pattern is the 06:32 from Zurich HB, arriving Zermatt at 09:51, with a return around 17:13. Confirm the day’s times on SBB before you leave — the Visp change is the one that matters, and it is usually a short cross-platform connection.',
  },
];

const CHECKLIST = [
  {
    id: 'check-score',
    label: 'Morning score is 5/10 or higher',
    detail:
      'Under 5/10, postpone. That is about seven hours on trains without the mountain.',
  },
  {
    id: 'check-source',
    label: 'The score is for Zermatt, not for Zurich',
    detail:
      'Zurich and Geneva sit in a different weather regime. A sunny city forecast does not describe the Matterhorn.',
  },
  {
    id: 'check-clag',
    label: 'This is high clag, or it is valley fog',
    detail:
      'High clag hides the summit itself. Do not go. Valley fog can sit on Zermatt while Gornergrat is clear above it. Low-cloud versus mid-cloud on the tracker separates the two.',
  },
  {
    id: 'check-morning',
    label: 'Gornergrat happens before lunch',
    detail:
      'Afternoon cumulus is common from May through August. The useful day-trip window is late morning.',
  },
  {
    id: 'check-backup',
    label: 'A valley plan exists if the ridge socks in',
    detail:
      'Zermatlantis, Gorner Gorge, or fondue on Bahnhofstrasse still work after you arrive.',
  },
];

export const metadata = planningGuideMetadata(TITLE, DESCRIPTION, PATH);

export default function ZurichZermattDayTripPage() {
  const jsonLd = buildStaticGuideJsonLd({
    path: PATH,
    headline: TITLE,
    description: DESCRIPTION,
    breadcrumb: 'Zurich to Zermatt day trip',
    datePublished: PLANNING_GUIDE_UPDATED,
    dateModified: PLANNING_GUIDE_UPDATED,
    faqs: FAQS,
  });

  return (
    <GuideLayout
      path={PATH}
      breadcrumb="Zurich to Zermatt day trip"
      title={TITLE}
      description={DESCRIPTION}
      jsonLd={jsonLd}
    >
      <h2>Quick verdict: the day-trip reality check</h2>
      <GuideVerdictGrid>
        <GuideVerdict tone="emerald" label="The ride">
          About 3 hours 15 minutes each way from Zurich HB, with one change at Visp. Geneva is
          longer, about 3 hours 45 minutes, on the same Visp connection.
        </GuideVerdict>
        <GuideVerdict tone="amber" label="The decision rule">
          Round trip without a Half-Fare Card is commonly CHF 120–250 or more. If this morning’s
          tracker score is under 5/10, postpone. You would spend about seven hours on trains
          without seeing the mountain.
        </GuideVerdict>
      </GuideVerdictGrid>

      <LiveConditionCallout mode="day-trip" />

      <h2>Weather checklist</h2>
      <p>
        Do not trust the Zurich or Geneva forecast for Valais. High clag is cloud on the summit:
        the pyramid itself is gone, and the day trip fails. Valley fog is cloud on the valley
        floor: Zermatt looks grey while Gornergrat, at 3,089 m, can be in sun above the deck. The
        tracker’s low-cloud and mid-cloud layers are how you tell them apart.
      </p>
      <GuideChecklist legend="Before you leave the hotel" items={CHECKLIST} />
      <p>
        A fuller timetable from Zurich, Geneva, Bern, and Basel is in the{' '}
        <Link href="/guides/zurich-geneva-to-zermatt-day-trip">
          Zurich and Geneva day-trip field guide
        </Link>
        . Which summit to ride once you arrive is the{' '}
        <Link href="/guides/gornergrat-vs-klein-matterhorn">Gornergrat vs. Klein Matterhorn</Link>{' '}
        choice. On a tight clock, Gornergrat wins: the cogwheel station is across the square from
        the Zermatt platform.
      </p>

      <h2>Sample day from Zurich</h2>
      <p>
        This is one optimized pattern, not a promise that 06:32 runs every day of the year. SBB
        times shift by season. Confirm the morning you travel. The shape of the day is what
        matters: the early train, the summit before lunch, the village after, and a late-afternoon
        return.
      </p>
      <GuideTable
        caption="Sample Zurich HB connection"
        headers={['Time', 'Step']}
        rows={[
          ['06:32', 'Train from Zurich HB'],
          ['09:51', 'Arrive Zermatt, after the change at Visp'],
          ['10:15', 'Gornergrat train, before lunch'],
          ['13:30', 'Lunch in Zermatt village'],
          ['17:13', 'Return train toward Zurich'],
        ]}
      />
      <GuideTable
        caption="Go, wait, or stay home"
        headers={['Morning score', 'What it usually means', 'Decision']}
        rows={[
          ['8–10', 'Summit clear on the scored viewpoint', 'Board the early train'],
          [
            '5–7',
            'Partial view or a banner cloud',
            'Go only if a partial view is enough, and keep the valley backup',
          ],
          ['Under 5', 'High clag on the summit', 'Postpone'],
          [
            'Village grey, score still high',
            'Valley fog, ridge may be clear',
            'Still go. The Zurich forecast will not show this',
          ],
        ]}
      />

      <h2>If cloud rolls in after you arrive</h2>
      <p>
        A clear 09:00 can still sock in by early afternoon, especially from May through August.
        The summit ticket is the part you can skip. The village still has a day in it.
      </p>
      <ul>
        <li>
          <strong>Zermatlantis.</strong> The underground Matterhorn Museum on Kirchplatz, including
          the 1865 ascent story.
        </li>
        <li>
          <strong>Gorner Gorge.</strong> A short walk south of the village. In the summer season the
          gorge is open in light rain, and the water is the point.
        </li>
        <li>
          <strong>Bahnhofstrasse fondue.</strong> A long lunch still works when the ridge disappears
          after you have already arrived.
        </li>
      </ul>
      <p>
        The longer bad-weather list is the{' '}
        <Link href="/guides/zermatt-cloudy-rainy-day-guide">cloudy-day guide</Link>.
      </p>

      <GuideFaq id="day-trip-faq" items={FAQS} />
    </GuideLayout>
  );
}
