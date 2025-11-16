; hello.asm - Windows x86-64 with msvcrt printf

extern printf
global main

section .data
  msg db 'Hello Assembly!', 10, 0 ; 10 = '\n', null-terminated

section .text
main:
  ; Windows x64 calling convention: RCX, RDX, R8, R9
  sub rsp, 32           ; shadow space for calls
  lea rcx, [rel msg]    ; RCX = pointer to string
  call printf
  add rsp, 32
  xor eax, eax          ; return 0
  ret