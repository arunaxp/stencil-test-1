export function createElement() {
  const el = document.createElement("ion-alert-controller");
  console.log(el);
  if (!((el as any).componentOnReady)) alert('Unable to create component');
  (el as any).componentOnReady();
}
