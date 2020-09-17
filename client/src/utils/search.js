import _ from "lodash";

export function searchParams(allEvents, searchTerm) {
  const filtered =
    searchTerm !== ""
      ? allEvents.filter(
          (event) =>
            event.title.includes(searchTerm) ||
            event.organization.includes(searchTerm) ||
            event.location.includes(searchTerm) ||
            event.title.toLowerCase().includes(searchTerm) ||
            event.organization.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        )
      : allEvents;
  return _(searchTerm);
}
