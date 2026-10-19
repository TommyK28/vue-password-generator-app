export function useClipboardCopy(text: MaybeRefOrGetter<string>) {
  const isCopied = ref(false)

  async function copyToClipboard() {
    const textToCopy = toValue(text)

    if (!textToCopy) {
      return
    }

    // Vyprázdnění stavu před dalším kopírováním – čtečka pak „Copied“ ohlásí znovu
    isCopied.value = false
    await nextTick()

    try {
      await navigator.clipboard.writeText(textToCopy)
      isCopied.value = true
    } catch (error) {
      console.error('Copying to clipboard failed', error)
    }
  }

  watch(() => toValue(text), () => {
    isCopied.value = false
  })

  return { isCopied, copyToClipboard }
}
