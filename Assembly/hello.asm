; hello.asm - Windows x86-64 with msvcrt printf

extern printf
global main

section .data
  fmt db "%s", 10, 0            ; "%s\n" format string: 
  msg db "Hello Assembly!", 0   ; null-terminated string

section .text
main:
  sub rsp, 40           ; 32 for shadow space + 8 for alignment
  lea rcx, [rel fmt]    ; RCX = format string
  lea rdx, [rel msg]    ; RDX = pointer to string
  call printf

  add rsp, 40           ; restore stack
  xor eax, eax          ; return 0
  ret