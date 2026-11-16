#!/usr/bin/env bash
# Regenera AUDITORIA_BANCO.md: estructura + blueprint + claves oficiales.
set -uo pipefail
cd "$(dirname "$0")/.."

node tools/audit_bank.mjs --json /tmp/istqb-audit.json --md /tmp/istqb-audit.md

{
  cat /tmp/istqb-audit.md
  echo "## Verificación contra las claves oficiales (PDFs)"
  echo
  echo '```'
  node tools/verify_official_keys.mjs
  echo '```'
  echo
} > AUDITORIA_BANCO.md

echo "AUDITORIA_BANCO.md actualizado"
